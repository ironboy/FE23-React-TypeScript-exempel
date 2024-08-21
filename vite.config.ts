import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteRestart({
      restart: [
        'backendDist/*',
      ]
    })
  ],
  // let traffic to Vite starting with /api through to our backend
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
