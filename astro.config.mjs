import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://creativetimofficial.github.io",
  base: "./",
  vite: isProd
    ? {
        ssr: {
          noExternal: ["@material-tailwind/react"],
        },
      }
    : {},
});
