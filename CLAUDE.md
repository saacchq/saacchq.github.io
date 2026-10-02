# saacchq.org

The sa/acc community website is an Astro 7 static site deployed to GitHub Pages. It is bilingual: English and Arabic copy live in `src/i18n/`, and the language toggle changes `html[lang]` and direction before paint.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
```

The build works without credentials.

## Structure

- `src/pages/`: Home, Manifesto, Join, and 404.
- `src/components/`: shared navigation, footer, hero, language toggle.
- `src/config.ts`: site metadata, social links, meeting time.
- `src/styles/global.css`: black and white site styling and the exact left-side Saudi pattern asset.
- `public/assets/brand/`: source logo assets used throughout the site.

Keep English and Arabic translation keys in parity. Use the fixed logo asset and exact pattern; do not redraw the growth curve. The site uses black backgrounds, white text, and green as a restrained brand accent. Run `pnpm build` before submitting changes.
