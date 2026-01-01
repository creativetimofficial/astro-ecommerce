import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://creativetimofficial.github.io', 
  // ¡CAMBIA ESTA LÍNEA!
  base: '/' // <-- Ahora Astro construirá las rutas de recursos desde la raíz.
});
