// astro.config.mjs

import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import image from "@astrojs/image"; // <--- Añadir/descomentar

export default defineConfig({
  integrations: [
    react(),
    image({ // <--- Añadir/descomentar
      service: {
        entrypoint: 'astro/services/sharp',
      },
    }),
  ],
  site: 'https://darkrebel.rebelcrazy19.workers.dev', 
  base: '/', 
});
