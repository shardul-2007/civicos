import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves from https://shardul-2007.github.io/civicos/
  // This base is ONLY applied during `vite build`, not the dev server.
  base: '/civicos/',
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Split large vendor chunks to avoid 500KB warning
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          leaflet: ['leaflet', 'react-leaflet'],
          recharts: ['recharts'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
});
