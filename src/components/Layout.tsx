// Fichier : src/components/Layout.tsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-desktop-mendy-creation.png';

interface LayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

// 🗓️ Ton lien Calendly
const CALENDLY_URL = 'https://calendly.com/contact-mendycreation/30min';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Injecte la feuille de style Calendly (une seule fois)
  useEffect(() => {
    const id = 'calendly-widget-css';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
  }, []);

  // Ouvre la popup Calendly (charge le script si besoin)
  const openCalendly = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    const scriptId = 'calendly-widget-js';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      s.onload = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
      document.body.appendChild(s);
    } else {
      // si déjà présent mais Calendly pas encore prêt
      (document.getElementById(scriptId) as HTMLScriptElement).addEventListener(
        'load',
        () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL }),
        { once: true }
      );
    }
  };

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Réservation', href: '/reservation' }, // ✅ lien Calendly (page)
  ];

  const footerLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
    { name: 'Réservation', href: '/reservation' }, // ✅ dans le footer aussi
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white text-black shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Mendy Creation Logo" className="h-20 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-yellow-500 bg-neutral-100'
                      : 'text-black hover:text-yellow-600 hover:bg-neutral-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* ✅ Bouton popup Calendly (CTA header) */}
              <button
                onClick={openCalendly}
                className="ml-2 px-4 ml-2  py-2 group border-2 border-secondary hover:border-primary text-secondary hover:text-textDark rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Prendre rendez‑vous
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-black hover:text-yellow-600 hover:bg-neutral-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col items-center text-center space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-yellow-500 bg-neutral-100'
                        : 'text-black hover:text-yellow-600 hover:bg-neutral-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* ✅ Bouton popup Calendly (mobile) */}
                <button
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    openCalendly(e);
                  }}
                  className="mt-2 px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Prendre rendez‑vous
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-100 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Liens centrés */}
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-yellow-600 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bas du footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-black mb-4 md:mb-0">
              <img src={logo} alt="Mendy Creation Logo" className="h-10 w-auto" />
              <span className="text-lg font-semibold">Mendy Creation</span>
            </div>
            <p className="text-gray-600 text-sm text-center">
              © 2025 Mendy Creation. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
