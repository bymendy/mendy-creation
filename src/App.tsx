// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import Privacy from './pages/Privacy';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 👇 Ajout Calendly
import Booking from './pages/Booking';

// 👇 Cookies
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

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-slate-900 text-white">
        <Layout>
          {/* Modale & bannière visibles sur toutes les pages */}
          <CookieSettingsModal />
          <CookieBanner />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-de-confidentialite" element={<Privacy />} />
            {/*  Route Calendly */} 
            <Route path="/reservation" element={<Booking />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
