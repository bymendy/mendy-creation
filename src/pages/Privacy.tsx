// Fichier: src/pages/Privacy.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieConsent';

const Privacy: React.FC = () => {
  const updated = '14/08/2025';
  const { openSettings } = useCookieConsent(); // <- pour ouvrir la modale cookies

  return (
    <div className="bg-backgroundDark">
      <Helmet>
        <title>Politique de confidentialité — Mendy Creation</title>
        <meta
          name="description"
          content="Politique de confidentialité de Mendy Creation : traitement des données personnelles, droits RGPD, cookies et mesures de sécurité."
        />
        <link rel="canonical" href="https://mendycreation.fr/politique-de-confidentialite" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden bg-backgroundDark text-textLight">
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-neutralLight max-w-3xl mx-auto mb-8 animate-fadeIn">
            Protection des données personnelles, gestion des cookies et droits des utilisateurs.
          </p>
        </div>
      </section>

      {/* Corps */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat text-black"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwdkltr38/image/upload/v1753972654/theme_ytji1w.png')",
        }}
      >
        <div data-aos="fade-down" className="backdrop-blur-sm py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

            {/* Responsable du traitement */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <p className="text-sm opacity-70">Dernière mise à jour : {updated}</p>
              <h2 className="text-2xl font-bold mt-2">Responsable du traitement</h2>
              <p className="mt-3">
                <strong>MENDY BAREKINE</strong> (MENDY CREATION), Entrepreneur individuel.<br />
                SIREN : 937 937 522 — SIRET : 937 937 522 00012 — TVA : FR09937937522<br />
                Adresse : 5 Square Brassens, 91600 Savigny-sur-Orge, France<br />
                Email : <a href="mailto:contact@mendycreation.fr" className="text-blue-600 underline">
                  contact@mendycreation.fr
                </a>
              </p>
            </div>

            {/* Données collectées */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Données collectées</h2>
              <p className="mt-3">
                Via le formulaire de contact : nom, prénom, e-mail, téléphone (facultatif), message.<br />
                Métadonnées techniques : adresse IP, user-agent (navigateur), date et heure, à des fins de sécurité.
              </p>
            </div>

            {/* Finalités et base légale */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Finalités et bases légales</h2>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Répondre à vos demandes : intérêt légitime et/ou mesures précontractuelles.</li>
                <li>Sécurité, anti-spam et prévention des abus : intérêt légitime.</li>
                <li>Envoi d’informations (si inscrit volontairement) : consentement.</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Destinataires et transferts</h2>
              <p className="mt-3">
                Données transmises uniquement à : l’hébergeur (Nuxit), notre prestataire e-mail sécurisé, et Google
                (reCAPTCHA, responsable indépendant).<br />
                Certains traitements (reCAPTCHA) peuvent entraîner un transfert de données hors UE, encadré par les{' '}
                <a href="https://business.safety.google/adsprocessorterms/sccs" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Clauses Contractuelles Types
                </a>.
              </p>
            </div>

            {/* reCAPTCHA */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Protection anti-spam</h2>
              <p className="mt-3">
                Ce site est protégé par reCAPTCHA. La{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Politique de confidentialité
                </a>{' '}
                et les{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Conditions d’utilisation
                </a>{' '}
                de Google s’appliquent.
              </p>
            </div>

            {/* Cookies */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Cookies et traceurs</h2>
              <p className="mt-3">
                Nous utilisons des cookies essentiels au fonctionnement du site et à sa sécurité (ex : reCAPTCHA).<br />
                <button
                  onClick={openSettings}
                  className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  Gérer mes cookies
                </button>
              </p>
            </div>

            {/* Durées */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Durée de conservation</h2>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Formulaires : 3 ans après le dernier contact sans suite.</li>
                <li>Logs techniques : 12 mois.</li>
                <li>
                  Les données sont conservées pour la durée nécessaire à l’accomplissement des services proposés par Mendy Creation.
                  Les données sont conservées pendant toute la durée du contrat qui nous lie ainsi que trois ans après la cessation de votre contrat.
                  Si vous n’êtes pas encore client, vos données sont conservées pendant une durée de 3 ans maximum à compter de la date à laquelle vous nous avez interrogés et vous êtes rendus sur notre site, afin de nous permettre de mieux répondre à vos questions si vous nous sollicitez à nouveau. Les données sont ensuite archivées et restituables exclusivement dans le cadre d’un contentieux, pendant la durée de la prescription légale.
                </li>
              </ul>
            </div>

            {/* Droits */}
            <div className="bg-white/80 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-bold">Vos droits</h2>
              <p className="mt-3">
                Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité.<br />
                Pour exercer vos droits :{' '}
                <a href="mailto:contact@mendycreation.fr" className="text-blue-600 underline">
                  contact@mendycreation.fr
                </a><br />
                Vous pouvez également déposer une réclamation auprès de la{' '}
                <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  CNIL
                </a>.
              </p>
            </div>

            {/* Lien retour accueil */}
            <div className="text-center">
              <Link to="/" className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
                Retour à l’accueil
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
