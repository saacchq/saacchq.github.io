#!/usr/bin/env node

/**
 * Syncs blog posts from the Obsidian vault (saacchq/posts/) to the Astro site (src/data/posts/).
 *
 * - Reads all .md files in VAULT_POSTS_DIR (skips _ prefixed files)
 * - Filters by `published` field: true → include, "dev" → draft, false → skip
 * - Strips Obsidian-only frontmatter, keeps/generates Astro-required fields
 * - Hashes and copies local images to public/assets/posts/
 * - Converts wikilink images ![[file.png]] to standard markdown
 * - Writes transformed posts to src/data/posts/
 *
 * Usage: node scripts/sync-vault-posts.mjs --vault-path /path/to/vault
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import matter from "gray-matter";

// --- Config ---

const args = process.argv.slice(2);
const vaultFlagIndex = args.indexOf("--vault-path");
const VAULT_PATH =
  vaultFlagIndex !== -1 ? args[vaultFlagIndex + 1] : null;

if (!VAULT_PATH) {
  throw new Error(
    "Usage: node scripts/sync-vault-posts.mjs --vault-path /path/to/vault"
  );
}

const VAULT_POSTS_DIR = path.join(VAULT_PATH, "saacchq", "posts");
const VAULT_MEDIA_DIR = path.join(VAULT_PATH, "__media");
const POSTS_OUTPUT_DIR = path.resolve("src/data/posts");
const ASSETS_OUTPUT_DIR = path.resolve("public/assets/posts");

// Obsidian-only fields to strip from final frontmatter
const OBSIDIAN_FIELDS = [
  "type",
  "created",
  "modified",
  "status",
  "published",
  "class",
  "mdc",
  "theme",
  "layout",
  "background",
  "transition",
];

// --- Helpers ---

function parseObsidianDatetime(str) {
  if (!str) return null;
  // "2025-06-01 1000" → "2025-06-01T10:00:00Z"
  const match = String(str).match(/^(\d{4}-\d{2}-\d{2})\s+(\d{2})(\d{2})$/);
  if (match) {
    return new Date(`${match[1]}T${match[2]}:${match[3]}:00Z`);
  }
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}

function extractSlugFromFilename(filename) {
  const name = path.basename(filename, ".md");
  // "2025-06-01 1000 deep-sa.md" → "deep-sa"
  const match = name.match(/^\d{4}-\d{2}-\d{2}\s+\d{4}\s+(.+)$/);
  return match ? match[1] : name;
}

function hashFile(filepath) {
  const content = fs.readFileSync(filepath);
  return crypto.createHash("sha256").update(content).digest("hex").slice(0, 12);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function serializeValue(val, indent = "") {
  if (val instanceof Date) return val.toISOString();
  if (typeof val === "string") {
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(val)) return val;
    if (
      /[:#{}[\],&*?|>!%@`"'\n]/.test(val) ||
      val === "" ||
      val === "true" ||
      val === "false"
    ) {
      return JSON.stringify(val);
    }
    return val;
  }
  if (typeof val === "boolean" || typeof val === "number") return String(val);
  if (Array.isArray(val)) {
    return (
      "\n" +
      val
        .map((v) => `${indent}  - ${serializeValue(v, indent + "  ")}`)
        .join("\n")
    );
  }
  return JSON.stringify(val);
}

/**
 * Wraps content split by `<!-- lang:en -->` / `<!-- lang:ar -->` markers in
 * `<div class="lang-block lang-XX">` blocks so the body honours the site-wide
 * language toggle. Content before the first marker is left as-is (shared).
 */
function wrapLanguageSections(content) {
  if (!/<!--\s*lang:(en|ar)\s*-->/.test(content)) return content;

  const parts = content.split(/<!--\s*lang:(en|ar)\s*-->/);
  let result = parts[0]; // anything before the first marker stays shared

  for (let i = 1; i < parts.length; i += 2) {
    const lang = parts[i];
    const sectionContent = (parts[i + 1] || "").trim();
    const dirAttr = lang === "ar" ? ' dir="rtl"' : "";
    result +=
      `\n\n<div class="lang-block lang-${lang}"${dirAttr}>\n\n` +
      sectionContent +
      `\n\n</div>\n`;
  }
  return result;
}

function serializePost(fm, content) {
  let yaml = "---\n";
  for (const [key, val] of Object.entries(fm)) {
    if (val == null) continue;
    yaml += `${key}: ${serializeValue(val)}\n`;
  }
  yaml += "---\n";
  return yaml + content;
}

// --- Main ---

function syncPosts() {
  // Bail BEFORE touching the output directory if the vault isn't here.
  // CI runners don't have ~/Vault, so they should leave the committed
  // src/data/posts/ alone and let astro build from those checked-in files.
  if (!fs.existsSync(VAULT_POSTS_DIR)) {
    process.stdout.write(
      `Vault posts directory not found: ${VAULT_POSTS_DIR}\n` +
        `Skipping sync — astro will build from existing src/data/posts/.\n`
    );
    return;
  }

  ensureDir(POSTS_OUTPUT_DIR);
  ensureDir(ASSETS_OUTPUT_DIR);

  // Clean entire posts directory (full replace strategy)
  function cleanDir(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        cleanDir(fullPath);
        if (fs.readdirSync(fullPath).length === 0) {
          fs.rmdirSync(fullPath);
        }
      } else if (entry.name.endsWith(".md")) {
        fs.unlinkSync(fullPath);
      }
    }
  }
  cleanDir(POSTS_OUTPUT_DIR);

  // Read vault posts
  const postFiles = fs
    .readdirSync(VAULT_POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  let synced = 0;
  let skipped = 0;

  for (const file of postFiles) {
    const filepath = path.join(VAULT_POSTS_DIR, file);
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data: fm, content } = matter(raw);

    // Filter by published field
    if (fm.published === false) {
      skipped++;
      continue;
    }

    const isDraft = fm.published === "dev";
    const slug = fm.slug || extractSlugFromFilename(file);

    // Build Astro frontmatter
    const astroFm = {};

    // Required fields
    astroFm.title = fm.title || slug;
    if (fm.titleAr) astroFm.titleAr = fm.titleAr;
    astroFm.description = fm.description || "";
    if (fm.descriptionAr) astroFm.descriptionAr = fm.descriptionAr;
    astroFm.pubDatetime = fm.pubDatetime
      ? new Date(fm.pubDatetime).toISOString()
      : parseObsidianDatetime(fm.created)?.toISOString() ||
        new Date().toISOString();

    // Optional fields
    if (fm.author) astroFm.author = fm.author;
    if (fm.modDatetime) {
      astroFm.modDatetime = new Date(fm.modDatetime).toISOString();
    } else if (fm.modified) {
      const mod = parseObsidianDatetime(fm.modified);
      if (mod) astroFm.modDatetime = mod.toISOString();
    }
    if (fm.featured != null) astroFm.featured = fm.featured;
    if (isDraft) astroFm.draft = true;
    if (fm.draft != null && !isDraft) astroFm.draft = fm.draft;
    if (fm.tags) astroFm.tags = fm.tags;
    if (fm.slug) astroFm.slug = fm.slug;
    if (fm.coverImage) astroFm.coverImage = fm.coverImage;

    // Process content: convert wikilink images and copy local images
    let processedContent = content;

    // Wrap language sections in <div class="lang-block lang-XX"> so the existing
    // CSS visibility toggling (html[lang="XX"] .lang-XX) can hide the inactive lang.
    // CommonMark parses markdown inside HTML blocks if separated by blank lines.
    processedContent = wrapLanguageSections(processedContent);

    processedContent = processedContent.replace(
      /!\[\[([^\]]+)\]\]/g,
      (_match, imageName) => {
        const srcPath = path.join(VAULT_MEDIA_DIR, imageName);
        if (fs.existsSync(srcPath)) {
          const hash = hashFile(srcPath);
          const ext = path.extname(imageName);
          const hashedName = `${hash}${ext}`;
          const destPath = path.join(ASSETS_OUTPUT_DIR, hashedName);

          if (!fs.existsSync(destPath)) {
            fs.copyFileSync(srcPath, destPath);
          }

          return `![](/assets/posts/${hashedName})`;
        }
        return `![](${imageName})`;
      }
    );

    // Write transformed post
    const outputFilename = `${slug}.md`;
    const outputContent = serializePost(astroFm, processedContent);
    fs.writeFileSync(path.join(POSTS_OUTPUT_DIR, outputFilename), outputContent);
    synced++;
  }

  // Clean up orphaned assets
  const allPostContent = fs
    .readdirSync(POSTS_OUTPUT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => fs.readFileSync(path.join(POSTS_OUTPUT_DIR, f), "utf-8"))
    .join("\n");

  const assetFiles = fs.existsSync(ASSETS_OUTPUT_DIR)
    ? fs.readdirSync(ASSETS_OUTPUT_DIR)
    : [];
  let cleaned = 0;
  for (const asset of assetFiles) {
    if (!allPostContent.includes(asset)) {
      fs.unlinkSync(path.join(ASSETS_OUTPUT_DIR, asset));
      cleaned++;
    }
  }

  const summary = `Synced ${synced} posts, skipped ${skipped}, cleaned ${cleaned} orphaned assets.`;
  process.stdout.write(summary + "\n");
}

syncPosts();
