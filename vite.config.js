import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        detectores: resolve(__dirname, 'detectores.html'),
        medidores: resolve(__dirname, 'medidores.html'),
        niveladores: resolve(__dirname, 'niveladores.html'),
      },
      output: {
        entryFileNames: `assets/bosch-lp-[name].js`,
        chunkFileNames: `assets/bosch-lp-[name].js`,
        assetFileNames: `assets/bosch-lp-[name].[ext]`,
      },
    },
  },
});
