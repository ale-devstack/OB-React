import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/OB-React/',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'vendor-react'
          if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router/')) return 'router'
          if (id.includes('node_modules/lucide-react')) return 'icons'
        },
      },
    },
  },
})
