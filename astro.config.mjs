import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
// 1. IMPORTAR la integración de imágenes
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    // 2. AÑADIR la integración con el servicio (Sharp es el motor)
    image({
      service: {
        entrypoint: 'astro/services/sharp',
      },
    }),
  ],
  site: 'https://creativetimofficial.github.io',
  // 3. CORREGIR la ruta base para Cloudflare Pages
  base: '/', 
});
