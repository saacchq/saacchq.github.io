# saacchq.org

The website for **sa/acc** (Saudi Acceleration) — a grassroots community accelerating AI
and technology in Saudi Arabia. Bilingual (Arabic / English), dark, and community-driven.

🌐 **[saacchq.org](https://saacchq.org)** · 💬 **[Discord](https://discord.gg/Ks4Dpdzkmn)**

## Contribute

Anyone can write a post or improve the site — see **[CONTRIBUTING.md](CONTRIBUTING.md)**.
Not a developer? Open a
[post proposal](https://github.com/saacchq/saacchq.org/issues/new?template=post-proposal.yml)
and we'll help.

## Quickstart

Requires [Node 20+](https://nodejs.org) and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build → ./dist
pnpm preview    # preview the production build
```

No vault, secrets, or extra setup — the site builds entirely from the repo.

## Stack

- **[Astro 5](https://astro.build)** static site (SSG)
- **[Tailwind CSS v4](https://tailwindcss.com)** via `@tailwindcss/vite`
- **TypeScript** (strict) · **pnpm** · deployed to **GitHub Pages** on push to `main`

## Structure

```
src/
├── pages/           # routes: index, posts/, series, tags/, manifesto, about,
│                    #         contribute, authors, 404, rss.xml
├── layouts/         # Layout.astro (HTML shell, SEO/meta, dark, RTL/LTR)
├── components/      # Header, Footer, Manifesto, PostCard, ShareButtons, LangToggle
├── data/posts/      # blog posts (Markdown) — this is where content lives
├── config.ts        # site metadata, social, series, authors (single source of truth)
├── i18n/            # ar.json / en.json translation strings + helpers
└── styles/          # global.css (Tailwind + design tokens)
public/
└── assets/posts/    # images referenced from posts (/assets/posts/…)
```

Architecture details and conventions: **[CLAUDE.md](CLAUDE.md)**.
