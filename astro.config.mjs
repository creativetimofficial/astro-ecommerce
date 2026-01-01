import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
// Importar la integración de imágenes
import image from "@astrojs/image"; 

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    // Añadir la integración de imágenes aquí
    image({
      service: {
        entrypoint: 'astro/services/sharp', // O 'astro/services/squoosh'
      },
      // Puedes configurar directorios base, etc.
    }),
  ],
  site: 'https://darkrebel.rebelcrazy19.workers.dev', 
  base: '/', 
});
