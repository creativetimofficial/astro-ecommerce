import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
// DEBES comentar esta línea:
// import image from "@astrojs/image"; 

export default defineConfig({
  integrations: [
    react(),
    // Y DEBES comentar o eliminar la entrada 'image' en el array de integraciones.
  ],
  site: 'https://darkrebel.rebelcrazy19.workers.dev', 
  base: '/', // Asegúrate de que esta línea siga siendo '/'
});
