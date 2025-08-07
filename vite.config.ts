import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    outDir: 'project-mendycreation', // ← ici tu changes "dist" par ce que tu veux
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
