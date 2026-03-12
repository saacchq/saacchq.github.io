# CLAUDE.md — saacchq.org

## Commands

```bash
pnpm install          # Install dependencies
npx astro dev         # Dev server (localhost:4321)
npx astro build       # Production build → ./dist
npx astro preview     # Preview production build
```

## Architecture

Astro 5 static site, single page (`src/pages/index.astro`). Bilingual (Arabic RTL default, English LTR) with client-side `localStorage` toggle. Dark mode only — no theme switcher. Minimal manifesto-style design.

### Stack

- **Framework**: Astro 5 (static SSG)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin (configured in `astro.config.ts`)
- **TypeScript**: Strict mode (`astro/tsconfigs/strict`)
- **Package manager**: pnpm
- **Deployment**: GitHub Pages via Actions (pnpm v9, Node 20) on push to `main`

### Path alias

`@/*` → `./src/*` (configured in `tsconfig.json`)

## Project Structure

```
src/
├── pages/index.astro          # Single page (manifesto layout)
├── layouts/Layout.astro       # Base HTML shell (dark mode, RTL/LTR, meta)
├── components/                # Astro components (Header, Manifesto, Footer, LangToggle)
├── config.ts                  # Site metadata and social links (single source of truth)
├── i18n/{ar,en}.json          # UI translation strings (manifesto content)
├── i18n/index.ts              # getTranslation(lang, key) and t(lang, key) helpers
└── styles/global.css          # Tailwind imports, dark theme CSS variables
public/
├── toggle-lang.js             # Runs before hydration to set <html dir/lang> from localStorage
└── CNAME                      # saacchq.org
```

## i18n

- JSON translation files: `src/i18n/ar.json`, `src/i18n/en.json`
- `public/toggle-lang.js` sets `<html dir>` and `lang` from `localStorage` before render (prevents layout flash)
- Components call `getTranslation(lang, key)` or `t(lang, key)` from `src/i18n/index.ts`
- Manifesto content lives in the i18n JSON files (6 numbered points + intro + disclaimer)

## Design Tokens (Dark Only)

- Background: `#0F0F0F` | Surface: `#171717` | Border: `#252525`
- Primary text: `#FFFFFF` | Secondary: `#999999` | Dim: `#6E6E6E`

## Conventions

- Components are stateless: props in, HTML out, no side effects
- `src/config.ts` is the single source of truth for site metadata and social links
- Bilingual content uses `lang-ar`/`lang-en` CSS classes toggled by `html[lang]`
- Use `getTranslation()` for dynamic keys, `t()` for static typed keys
