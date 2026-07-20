# Contributing to saacchq.org

sa/acc is a community project — posts, fixes, and ideas from anyone are welcome. This
guide covers everything you need to publish a post or improve the site.

> Not a developer? You can still contribute. Open a
> [**post proposal**](https://github.com/saacchq/saacchq.org/issues/new?template=post-proposal.yml)
> and a maintainer will help get it published. Or just join the
> [Discord](https://discord.gg/Ks4Dpdzkmn).

## Run the site locally

You need [Node 20+](https://nodejs.org) and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/saacchq/saacchq.org.git
cd saacchq.org
pnpm install
pnpm dev          # http://localhost:4321
```

That's it — no vault, no secrets, no extra setup. The site builds from the Markdown
files committed under `src/data/posts/`.

## Write a post

1. Copy the template and rename it:
   ```bash
   cp src/data/posts/_template.md src/data/posts/my-post.md
   ```
   (Files starting with `_` are ignored by the build, so the template never ships.)
2. Fill in the frontmatter. Only **`title`**, **`description`**, and **`pubDatetime`** are
   required. Full schema in [`src/content.config.ts`](src/content.config.ts):

   | Field | Required | Notes |
   |------|----------|-------|
   | `title` / `titleAr` | title only | English / Arabic titles (`titleAr` falls back to `title`) |
   | `description` / `descriptionAr` | description only | one-sentence summary (cards, SEO, social) |
   | `pubDatetime` | ✅ | ISO date; the post stays hidden until this time |
   | `author` | — | match a key in `src/config.ts` `authors` to get a profile link |
   | `tags` | — | topics; the **first** tag is the series key if it matches a series |
   | `slug` | — | defaults to the file name |
   | `coverImage` | — | social share image |
   | `draft` | — | `true` hides it from the live site |

3. Write the content. Posts are **bilingual** — each language goes in its own block, and
   the site shows one at a time based on the reader's toggle:

   ```html
   <div class="lang-block lang-en">

   ## Introduction
   English content…

   </div>

   <div class="lang-block lang-ar" dir="rtl">

   ## المقدمة
   المحتوى العربي…

   </div>
   ```

   You can use these ready-made components (as raw HTML inside the markdown):
   `callout callout-{info,warning,danger,success}`, `post-figure`, `post-meme`,
   `stat-grid`/`stat-block`, `section-thumb`. See
   [`ai-abliteration-series-1.md`](src/data/posts/ai-abliteration-series-1.md) for a
   complete real example.

4. **Images** go in `public/assets/posts/` and are referenced as `/assets/posts/<file>`
   (drop the `public/` prefix in the URL).

5. Preview at `http://localhost:4321/posts/my-post`, then open a PR.

## Add yourself as an author

So your name links to your profile and shows on the `/authors` page, add an entry to the
`authors` map in [`src/config.ts`](src/config.ts):

```ts
authors: {
  "Your Name": {
    handle: "yourhandle",
    url: "https://x.com/yourhandle",
    bio: "One line about you (optional).",
  },
},
```

Use the exact same string in your post's `author` field.

## Start a series

A series is a tag with a lead author. Add an entry to the `series` map in `src/config.ts`
(the key is the tag **and** its `/tags/<key>` route), then make that key the first tag on
each post in the series:

```ts
series: {
  "my-series": {
    name: "My Series",
    nameAr: "سلسلتي",
    author: "Your Name",
    handle: "yourhandle",
    authorUrl: "https://x.com/yourhandle",
  },
},
```

## Pull request checklist

- [ ] `pnpm build` passes locally
- [ ] Post has both English and Arabic blocks (or intentionally one — note it in the PR)
- [ ] Images are under `public/assets/posts/` and load in preview
- [ ] Added yourself to `authors` (and a `series`, if new)

CI runs `pnpm build` on every PR, so you'll get a red check if something doesn't compile.

## Other contributions

Bug fixes, accessibility, translations, and design improvements are all welcome — open an
issue or PR. Project architecture lives in [`CLAUDE.md`](CLAUDE.md).
