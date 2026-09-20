import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import tailwind from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://saacchq.org",
  // v6 whitespace behaviour: keep a single space between inline elements
  // (bilingual lang-en/lang-ar sibling spans rely on it).
  compressHTML: true,
  integrations: [sitemap()],
  markdown: {
    // Astro 7 defaults to Sätteri; unified() keeps the remark/rehype pipeline.
    processor: unified(),
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: { className: ["heading-anchor"], ariaHidden: "true", tabIndex: -1 },
          content: { type: "text", value: " #" },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwind()],
  },
});

