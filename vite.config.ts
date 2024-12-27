import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/public/',  // GitHub Pages alt dizini için base yolunu ayarlıyoruz
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});