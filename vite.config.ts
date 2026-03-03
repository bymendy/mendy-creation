// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'icon-192_mendycreation.png',
        'icon-512_mendycreation.png',
        'apple-touch-icon_mendycreation.png'
      ],

      manifest: {
        name: 'Mendy Creation',
        short_name: 'Mendy',
        description:
          'Agence web moderne spécialisée en création de sites internet optimisés SEO.',
        start_url: '/app',
        scope: '/app',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',

        icons: [
          {
            src: '/icon-192_mendycreation.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512_mendycreation.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/icon-512_mendycreation.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },

      workbox: {
        navigateFallback: '/offline.html',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}']
      }
    })
  ],

  build: {
    outDir: 'project-mendycreation', // ✅ on garde ton dossier personnalisé
  },

  optimizeDeps: {
    exclude: ['lucide-react'], // ✅ on garde ton optimisation
  }
})