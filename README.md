# saacchq.org

The bilingual website for **sa/acc** (Saudi Acceleration), a community building AI and technology in Saudi Arabia.

[Website](https://saacchq.org) · [Discord](https://discord.gg/Ks4Dpdzkmn)

## Run locally

Requires Node 22+ and pnpm.

```bash
pnpm install
pnpm dev
pnpm build
```

The Astro site is static and deploys to GitHub Pages. Home, Members, Manifesto and Join are the main pages. The logo is shown directly; its Saudi pattern is used as a left-side page rail.

## Rebuild brand images

The editable logo geometry lives in `scripts/brand/generate_logo.py`. The white growth shape overlaps the white square border by one pixel at each join, so raster versions have no black seam. Run both scripts from the repository root to rebuild the favicon, site avatar, social card, and YouTube images in `public/assets/brand/`:

```bash
python3 scripts/brand/generate_logo.py
python3 scripts/brand/publish_assets.py
```

The publisher needs Pillow, `rsvg-convert`, and JetBrains Mono. Set `SAACC_MONO_FONT` if the font is elsewhere. To also refresh a local OBS logo, set `SAACC_OBS_LOGO` to the destination SVG path before running the publisher. The YouTube upload files are `youtube-banner.png` and `youtube-watermark.png` in `public/assets/brand/`.

## Discord member directory

The server's public invite identifies guild `1481044663086481472`, but a public invite and Discord's optional widget do not expose the full member list. The site ships with two maintained community profiles and an empty roster until a server bot is connected.

1. Add a Discord application bot to the sa/acc server and enable **Guild Members Intent** in its developer settings.
2. Add its token as the GitHub Actions repository secret `DISCORD_BOT_TOKEN`. Do not commit the token.
3. Run **Deploy to GitHub Pages** from Actions or push to `main`. The build calls `pnpm sync:discord`, then renders the roster. The workflow also refreshes it daily.

For a local sync, set `DISCORD_BOT_TOKEN` in your shell and run `pnpm sync:discord`. `DISCORD_GUILD_ID` can override the default guild ID. The script paginates through all human server members and writes the public names, usernames, and avatar URLs to `src/data/discord-members.json`. Keep that generated roster out of commits; CI regenerates it during deployment.

See [CONTRIBUTING.md](CONTRIBUTING.md) for site changes.
