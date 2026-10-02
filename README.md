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

The Astro site is static and deploys to GitHub Pages. Home, Manifesto and Join are the main pages. The logo is shown directly; its Saudi pattern is used as a left-side page rail.

## Rebuild brand images

The editable logo geometry lives in `scripts/brand/generate_logo.py`. The white square border and growth area are one continuous shape, so raster versions have no seam. Run both scripts from the repository root to rebuild the favicon, site avatar, social card, and YouTube images in `public/assets/brand/`:

```bash
python3 scripts/brand/generate_logo.py
python3 scripts/brand/publish_assets.py
```

The publisher needs Pillow, `rsvg-convert`, and JetBrains Mono. Set `SAACC_MONO_FONT` if the font is elsewhere. To also refresh a local OBS logo, set `SAACC_OBS_LOGO` to the destination SVG path before running the publisher. The YouTube upload files are `youtube-banner.png` and `youtube-watermark.png` in `public/assets/brand/`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for site changes.
