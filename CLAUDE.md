# saacchq.org

The sa/acc community website is an Astro 7 static site deployed to GitHub Pages. It is bilingual: English and Arabic copy live in `src/i18n/`, and the language toggle changes `html[lang]` and direction before paint.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm sync:discord
```

The build works without credentials. `pnpm sync:discord` needs `DISCORD_BOT_TOKEN` for a bot installed in the sa/acc server with Guild Members Intent enabled. It generates `src/data/discord-members.json`; never commit a token or generated roster. GitHub Actions runs the sync before production builds when the secret exists.

## Structure

- `src/pages/`: Home, Members, Manifesto, Join, and 404.
- `src/components/`: shared navigation, footer, hero, avatars, language toggle.
- `src/config.ts`: site metadata, social links, meeting time, maintained profiles.
- `src/data/discord-members.json`: generated public member roster, empty in the repo.
- `src/styles/global.css`: black and white site styling and the exact left-side Saudi pattern asset.
- `public/assets/brand/`: source logo assets used throughout the site.

Keep English and Arabic translation keys in parity. Use the fixed logo asset and exact pattern; do not redraw the growth curve. The site uses black backgrounds, white text, and green as a restrained brand accent. Run `pnpm build` before submitting changes.
