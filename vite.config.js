import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/OB-React/',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    minify: 'esbuild',
    // Desactiva el cálculo de tamaño comprimido — acelera el build
    reportCompressedSize: false,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core en su propio vendor — se cachea entre deploys
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // Router en chunk separado
          if (id.includes('react-router-dom') || id.includes('react-router')) {
            return 'router';
          }
          // ⚠️ lucide-react NO va en chunk global:
          // Cada ruta lazy lleva sus íconos propios → mejor tree shaking
        },
      },
    },
  },
})