import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://saacchq.org",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});

