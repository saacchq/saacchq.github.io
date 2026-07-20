# CLAUDE.md — saacchq.org

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Dev server (localhost:4321)
pnpm build            # Production build → ./dist
pnpm preview          # Preview production build
```

No vault, secrets, or codegen step — the site builds entirely from the repo.
Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md).

## Architecture

Astro 5 static site (SSG), multi-page, bilingual (Arabic RTL default intent / English
LTR) with a client-side `localStorage` language toggle. Dark mode only. Manifesto-style
design plus a community blog (posts, series, tags), a members directory, and
community pages (contribute, about, 404).

### Stack

- **Framework**: Astro 5 (static SSG), `@astrojs/sitemap`, `@astrojs/rss`
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (configured in `astro.config.ts`)
- **Markdown**: `rehype-slug` + `rehype-autolink-headings` (heading anchors)
- **TypeScript**: strict (`astro/tsconfigs/strict`)
- **Package manager**: pnpm
- **Deploy**: GitHub Pages via Actions (pnpm 9, Node 20) on push to `main`; a separate
  `ci.yml` runs `pnpm build` on every PR.

### Path alias

`@/*` → `./src/*` (configured in `tsconfig.json`)

## Project Structure

```
src/
├── pages/
│   ├── index.astro            # Home: manifesto + latest posts
│   ├── posts/index.astro      # Post list
│   ├── posts/[slug].astro     # Post detail (slideshow, image lightbox, share)
│   ├── series.astro           # Author-led series
│   ├── members/index.astro    # Members directory
│   ├── members/[slug].astro   # Member profile (avatar, links, their posts)
│   ├── tags/index.astro       # Topics + series tags
│   ├── tags/[tag].astro       # Posts for a tag
│   ├── manifesto.astro        # Long-form manifesto
│   ├── contribute.astro       # Join & contribute
│   ├── about.astro            # About + FAQ + partners/associations
│   ├── 404.astro              # Branded not-found
│   └── rss.xml.ts             # RSS feed
├── layouts/Layout.astro       # HTML shell: SEO/OG/Twitter/JSON-LD, dark, RTL/LTR, FOUC script
├── components/                # Header, Footer, Manifesto, PostCard, ShareButtons, Avatar, LangToggle
├── data/posts/                # Blog posts (Markdown). `_template.md` is the starter (ignored by the build).
├── config.ts                  # Site metadata, social, series, members, topics, meeting (single source of truth)
├── content.config.ts          # Posts content collection schema
├── i18n/{ar,en}.json          # UI strings + getTranslation/t helpers
├── utils/                     # getSortedPosts, getSeries, getMembers, getReadingTime, getTableOfContents, getUniqueTags, getPostsByTag, postFilter
└── styles/global.css          # Tailwind + design tokens + component classes (callout, post-figure, stat-*, etc.)
public/
├── assets/posts/              # Post images (referenced as /assets/posts/…)
├── assets/members/            # Member avatars (e.g. Discord profile pictures)
├── og.png                     # Default social share image (1200×630)
└── favicon.svg, saacchq-meeting.ics, CNAME
```

## Content model

- **Posts** live in `src/data/posts/*.md`. Required frontmatter: `title`, `description`,
  `pubDatetime`. Bilingual content is written in `<div class="lang-block lang-en">` /
  `lang-ar` wrappers. The **first tag** is the series key when it matches a `config.series`
  entry; canonical topic tags are `config.topics` (news, build, engineering, research, share).
- **Series** (`config.series`) — a tag + lead author; rendered on `/series` and `/tags`.
- **Members** (`config.members`) — keyed by the name used in a post's `author` field; each
  gets `/members/<slug>` with their avatar and posts. `getMembers.ts` maps a post's effective
  author (series lead, else `author`) to a member.
- **Authors on posts**: the byline shows the series lead author (`getSeriesFromTags`), linked
  to their profile.

## i18n

- `src/i18n/{ar,en}.json` hold UI strings; keep the two files at **key parity**.
- Components render both languages as sibling spans (`lang-en` / `lang-ar`); `global.css`
  shows one via `display:none` on `html[lang]` (so screen readers read only the active one).
- The FOUC-prevention script is **inline in `Layout.astro`** (sets `<html lang/dir>` before
  paint) — there is no separate `public/toggle-lang.js`.
- Use `getTranslation(lang, key)` (untyped, falls back to the key) or `t(lang, key)` (typed).

## Design Tokens (Dark Only)

- Background: `#0F0F0F` | Surface: `#171717` | Border: `#252525`
- Primary text: `#FFFFFF`/`#e6edf3` | Secondary: `#8b949e` | Dim: `#6E6E6E`
- Accent: `#3fb950` (green). Keyboard focus: `2px` green `:focus-visible` outline.
- Note: some `#6E6E6E` small text is borderline for WCAG AA contrast — prefer `#8b949e`
  for meaningful (non-decorative) small text.

## Conventions

- Components are stateless: props in, HTML out.
- `src/config.ts` is the single source of truth for site metadata, series, members, and topics.
- Bilingual content uses `lang-ar`/`lang-en` spans toggled by `html[lang]`.
- Post images go in `public/assets/posts/`; member avatars in `public/assets/members/`.
