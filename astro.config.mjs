import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
// Comenta o elimina estas líneas temporalmente:
// import image from "@astrojs/image"; 

export default defineConfig({
  integrations: [
    react(),
    // Comenta o elimina también la integración:
    // image({ /* ... */ }), 
  ],
  site: 'https://darkrebel.rebelcrazy19.workers.dev', 
  base: '/', 
});
