import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://saacchq.org",
  // v6 whitespace behaviour: keep a single space between inline elements
  // (bilingual lang-en/lang-ar sibling spans rely on it).
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});

