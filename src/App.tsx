// src/App.tsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import Privacy from './pages/Privacy';
import Booking from './pages/Booking';

//  Start Page app-like
import Start from './pages/Start';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Cookies
import CookieBanner from './components/CookieBanner';
import CookieSettingsModal from './components/CookieSettingsModal';

const ScrollToHash = () => {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);
  return null;
};

//  Détection “App installée” (Android + iOS)
const useStandalone = () => {
  const [isStandalone, setIsStandalone] = React.useState(false);

  React.useEffect(() => {
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    setIsStandalone(standalone);
  }, []);

  return isStandalone;
};

function App() {
  const isStandalone = useStandalone();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <ScrollToHash />

      <Routes>
        {/*  Route Start Page (SANS layout) */}
        <Route path="/app" element={<Start />} />

        {/*  Toutes les autres pages gardent ton design actuel */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-slate-900 text-white">
              <Layout>
                {/* Modale & bannière visibles sur toutes les pages */}
                <CookieSettingsModal />
                <CookieBanner />

                <Routes>
                  {/*  Si l’app est ouverte en mode “standalone”, on redirige vers /app */}
                  <Route
                    path="/"
                    element={isStandalone ? <Navigate to="/app" replace /> : <Home />}
                  />

                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/mentions-legales" element={<LegalNotice />} />
                  <Route
                    path="/politique-de-confidentialite"
                    element={<Privacy />}
                  />
                  <Route path="/reservation" element={<Booking />} />
                </Routes>
              </Layout>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;