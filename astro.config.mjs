import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sonoraprecision.com",
  base: "/",
  outDir: "./docs",
  build: {
    assets: "app_assets"
  },
  integrations: [tailwind()]
});