import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroMetaTags from "astro-meta-tags";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  output: "hybrid",
  site: "https://strawberry.rocks",
  integrations: [sitemap(), astroMetaTags()],
  adapter: vercel(),
  vite: {
    ssr: {
      external: ['@resvg/resvg-js']
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});