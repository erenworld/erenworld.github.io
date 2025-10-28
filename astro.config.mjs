// @ts-check
import { defineConfig } from "astro/config";
import { fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://erenworld.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["i.scdn.co", "image.tmdb.org"],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: true,
  }),
  markdown: {
    shikiConfig: {
      theme: "gruvbox-dark-hard",
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Alegreya",
        cssVariable: "--font-alegreya",
        weights: ["400 900"],
      },
    ],
  },
});
