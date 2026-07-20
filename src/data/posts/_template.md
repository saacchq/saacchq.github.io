---
# ── Post template ─────────────────────────────────────────────────────────────
# Copy this file to a new name (e.g. `my-post.md`) and edit. Files starting with
# an underscore are ignored by the build, so this template never gets published.
#
# Required: title, description, pubDatetime.
# Everything else is optional.

title: "Your English title"          # shown in English view + browser tab
titleAr: "عنوانك بالعربية"            # optional; falls back to `title`
description: "One-sentence English summary (used for cards, SEO, social)."
descriptionAr: "ملخص عربي من جملة واحدة."   # optional; falls back to `description`

pubDatetime: 2026-07-18T00:00:00.000Z # ISO date. Post is hidden until this time.
# modDatetime: 2026-07-18T00:00:00.000Z  # optional "last updated" date

author: "Your Name"                   # must match a key in src/config.ts `authors`
                                      #   to get a profile link + appear on /authors

# The FIRST tag doubles as the series key when it matches a key in
# src/config.ts `series` (e.g. `ai-weekly`). Otherwise tags are just topics.
tags:
  - your-topic
  - another-topic

# slug: my-post                       # optional; defaults to the file name
# coverImage: /assets/posts/my-cover.png  # optional; used as the social share image
# draft: true                         # optional; hides the post from the live site
---

<!--
  BILINGUAL CONTENT
  Write each language inside its own block. The site shows one at a time based on
  the reader's language toggle. Keep the English block first.

  Images: put files in `public/assets/posts/` and reference them as
  `/assets/posts/<file>` (the `public/` prefix is dropped in the URL).

  Available content components (write them as raw HTML inside the markdown):
    <div class="callout callout-info">…</div>       (also: -warning, -danger, -success)
    <figure class="post-figure"><img src="…" alt="…" /><figcaption>…</figcaption></figure>
    <figure class="post-meme">…</figure>            (smaller, centered image)
    <div class="stat-grid"><div class="stat-block stat-green">
       <span class="stat-number">64%</span><span class="stat-label">…</span></div></div>

  Headings: `##` becomes a section; `###` becomes a slide when the post is viewed
  as a slideshow. See an existing post (e.g. ai-abliteration-series-1.md) for a
  full example.
-->

<div class="lang-block lang-en">

## Introduction

Write your English content here.

</div>

<div class="lang-block lang-ar" dir="rtl">

## المقدمة

اكتب المحتوى العربي هنا.

</div>
