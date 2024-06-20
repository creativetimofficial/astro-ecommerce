import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://sonoraprecision.com",
  base: "/",
  outDir: "./docs",
  build: {
    assets: "app_assets",
  },
});
