// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// 👇 importe ton provider
import { CookieConsentProvider } from './context/CookieConsent';

// 👇 PWA: enregistre le service worker
import { registerSW } from 'virtual:pwa-register';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <CookieConsentProvider>
        <App />
      </CookieConsentProvider>
    </HelmetProvider>
  </StrictMode>
);

// ✅ PWA: mise à jour auto (simple et efficace)
registerSW({
  onNeedRefresh() {
    window.location.reload();
  },
});