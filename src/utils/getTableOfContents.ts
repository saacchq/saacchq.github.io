import GithubSlugger from "github-slugger";

/**
 * Extract h2 headings from a synced post body to build a per-language table of contents.
 * Detects language sections by looking for either the original `<!-- lang:XX -->` markers
 * or the `<div class="lang-block lang-XX">` wrappers added by the sync script.
 *
 * Uses github-slugger so the resulting ids match what rehype-slug produces.
 */
export interface TocEntry {
  text: string;
  id: string;
}

export interface TocByLanguage {
  en: TocEntry[];
  ar: TocEntry[];
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]+>/g, "").trim();
}

export function getTableOfContents(body: string): TocByLanguage {
  const lines = body.split("\n");
  const result: TocByLanguage = { en: [], ar: [] };
  // rehype-slug uses one slugger for the whole document; share one here too so
  // duplicate-suffixes (foo, foo-1) match the rendered output.
  const slugger = new GithubSlugger();
  let currentLang: "en" | "ar" | null = null;
  let divDepth = 0; // tracks nesting inside lang-block divs

  for (const line of lines) {
    // Original comment-style marker (raw vault content)
    const commentMatch = line.match(/<!--\s*lang:(en|ar)\s*-->/);
    if (commentMatch) {
      currentLang = commentMatch[1] as "en" | "ar";
      continue;
    }

    // Wrapped div from the sync script
    const divOpenMatch = line.match(/<div\s+class="lang-block\s+lang-(en|ar)"/);
    if (divOpenMatch) {
      currentLang = divOpenMatch[1] as "en" | "ar";
      divDepth = 1;
      continue;
    }
    if (currentLang && divDepth > 0) {
      // Track nested div open/close so we know when the lang-block ends
      const opens = (line.match(/<div\b/g) || []).length;
      const closes = (line.match(/<\/div>/g) || []).length;
      divDepth += opens - closes;
      if (divDepth <= 0) {
        currentLang = null;
        divDepth = 0;
        continue;
      }
    }

    if (!currentLang) continue;

    const h2Match = line.match(/^##\s+(.+)$/);
    if (h2Match) {
      const text = stripHtml(h2Match[1]);
      // Mirror rendered HTML's leading-whitespace handling: when the heading
      // raw text starts with an HTML tag (e.g. a section thumb span), the
      // rendered text content begins with a space, which github-slugger
      // converts into a leading "-" in the slug.
      const hasLeadingHtml = /^\s*<[^>]+>/.test(h2Match[1]);
      const slugInput = hasLeadingHtml ? ` ${text}` : text;
      result[currentLang].push({ text, id: slugger.slug(slugInput) });
    }
  }

  return result;
}
