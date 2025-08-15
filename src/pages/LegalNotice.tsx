// Fichier : src/pages/LegalNotice.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const LegalNotice: React.FC = () => {
  const updated = '14/08/2025'; // Mets à jour si besoin

  return (
    <div className="bg-backgroundDark">
      <Helmet>
        <title>Mentions légales — Mendy Creation</title>
        <meta
          name="description"
          content="Mentions légales de Mendy Creation : éditeur du site, contact, hébergement, propriété intellectuelle, responsabilité et conditions d’utilisation."
        />
        <link rel="canonical" href="https://mendycreation.fr/mentions-legales" />
      </Helmet>

      {/* Hero (même style que Services) */}
      <section className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden bg-backgroundDark text-textLight">
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Mentions légales</h1>
          <p className="text-xl text-neutralLight max-w-3xl mx-auto mb-8 animate-fadeIn">
            Informations légales et conditions d’utilisation du site.
          </p>
        </div>
      </section>

      {/* Corps (verre dépoli, sans cards) */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat text-black"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dwdkltr38/image/upload/v1753972654/theme_ytji1w.png')" }}
      >
        <div data-aos="fade-down" className="backdrop-blur-sm py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

            {/* Éditeur du site */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <p className="text-sm opacity-70">Dernière mise à jour : {updated}</p>
              <h2 className="text-2xl font-bold mt-2">Éditeur du site</h2>
              <p className="mt-3">
                <strong>MENDY BAREKINE (MENDY CREATION)</strong><br />
                Entrepreneur individuel — Micro‑entreprise<br />
                SIREN : 937&nbsp;937&nbsp;522 — SIRET (siège) : 937&nbsp;937&nbsp;522&nbsp;00012<br />
                TVA intracommunautaire : FR09937937522<br />
                Activité : Programmation informatique (Code NAF/APE 62.01Z)<br />
                Adresse : 5 Square Brassens, 91600 Savigny‑sur‑Orge, France<br />
                Tél. : 06&nbsp;13&nbsp;64&nbsp;20&nbsp;49 — Email :{' '}
                <a className="text-blue-600 underline" href="mailto:contact@mendycreation.fr">
                  contact@mendycreation.fr
                </a>
                .
              </p>
            </div>

            {/* Responsable de publication */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Responsable de publication</h2>
              <p className="mt-3">
                Mendy Creation, représentée par <strong>M. Mendy Barekine</strong>.
              </p>
            </div>

            {/* Hébergeur */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Hébergeur</h2>
              <p className="mt-3">
                Nuxit — 20 Rue Albert Einstein, 77420 Champs‑sur‑Marne, France
              </p>
              {/* Si ton hébergeur réel est différent (ex. Hostinger), remplace ce bloc par ses coordonnées exactes. */}
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Propriété intellectuelle</h2>
              <p className="mt-3">
                L’ensemble des contenus de ce site (textes, images, graphismes, logos, icônes, vidéos, codes) est protégé par le droit
                d’auteur et la propriété intellectuelle. Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle,
                sans autorisation écrite préalable de Mendy Creation est interdite. Les marques, logos et visuels de tiers restent la propriété
                de leurs titulaires respectifs.
              </p>
            </div>

            {/* Responsabilité & liens externes */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Responsabilité</h2>
              <p className="mt-3">
                Mendy Creation s’efforce d’assurer l’exactitude et la mise à jour des informations publiées. Des erreurs ou omissions
                peuvent toutefois survenir. Le site peut contenir des liens vers des sites externes ; Mendy Creation n’exerce aucun contrôle
                sur ces ressources et n’assume aucune responsabilité quant à leurs contenus.
              </p>
            </div>

            {/* Données personnelles / RGPD + reCAPTCHA */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Données personnelles</h2>
              <p className="mt-3">
                Les traitements (formulaire de contact, mesures de sécurité, reCAPTCHA) sont décrits dans notre{' '}
                <Link to="/politique-de-confidentialite" className="text-blue-600 underline">
                  Politique de confidentialité
                </Link>
                . Ce site est protégé par reCAPTCHA&nbsp;: la{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  politique de confidentialité
                </a>{' '}
                et les{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  conditions d’utilisation
                </a>{' '}
                de Google s’appliquent.
              </p>
            </div>

            {/* Droit applicable / Juridiction (sobre) */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Droit applicable</h2>
              <p className="mt-3">
                Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable,
                compétence est attribuée aux juridictions du ressort du siège de Mendy Creation.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p className="mt-3">
                Pour toute question ou signalement :{' '}
                <a className="text-blue-600 underline" href="mailto:contact@mendycreation.fr">
                  contact@mendycreation.fr
                </a>
                .
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact" className="text-blue-600 underline">Nous écrire</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
