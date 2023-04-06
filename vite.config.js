import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        detectores: resolve(__dirname, 'detectores.html'),
        medidores: resolve(__dirname, 'medidores.html'),
        niveladores: resolve(__dirname, 'niveladores.html'),
        detectoresChi: resolve(__dirname, 'detectores-chi-2.html'),
        medidoresChi: resolve(__dirname, 'medidores-chi-2.html'),
        niveladoresChi: resolve(__dirname, 'niveladores-chi-2.html'),
      },
      output: {
        entryFileNames: `assets/bosch-lp-[name].js`,
        chunkFileNames: `assets/bosch-lp-[name].js`,
        assetFileNames: `assets/bosch-lp-[name].[ext]`,
      },
    },
  },
});
