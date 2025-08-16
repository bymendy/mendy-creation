// src/pages/Booking.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  return (
    <div className="bg-backgroundDark min-h-screen">
      <Helmet>
        <title>Réserver un rendez-vous — Mendy Creation</title>
        <meta
          name="description"
          content="Planifiez un appel avec Mendy Creation : échange découverte, cadrage de projet, conseils et accompagnement sur-mesure."
        />
        <link rel="canonical" href="https://mendycreation.fr/reservation" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 min-h-[40vh] flex items-center justify-center overflow-hidden bg-backgroundDark text-textLight">
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Réserver un rendez-vous
          </h1>
          <p className="text-xl text-neutralLight max-w-3xl mx-auto animate-fadeIn">
            Choisissez un créneau dans notre agenda pour parler de votre projet et explorer des solutions sur-mesure.
          </p>
        </div>
      </section>

      {/* Inline Calendly avec vidéo de fond */}
      <section className="relative py-12 overflow-hidden">
        {/* Vidéo de fond */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dwdkltr38/video/upload/v1754159098/mendy_creation_vod-1_enlqld.mp4"
            type="video/mp4"
          />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>

        {/* Overlay sombre pour contraste */}
        <div  />

        {/* Contenu Calendly */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow p-2">
            <iframe
              title="Calendly - Mendy Creation"
              src="https://calendly.com/contact-mendycreation/30min?hide_gdpr_banner=1&text_color=#0060E6&primary_color=fde047"
              width="100%"
              height="800"
              frameBorder="0"
              loading="lazy"
              style={{ minHeight: 700, width: '100%' }}
            />
            <noscript>
              <div className="p-4 text-center">
                JavaScript est requis pour charger l’agenda.{' '}
                <a
                  className="text-blue-600 underline"
                  href="https://calendly.com/contact-mendycreation/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir la page Calendly
                </a>.
              </div>
            </noscript>
          </div>

          {/* Bouton retour accueil */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
