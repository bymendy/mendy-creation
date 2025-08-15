// File: src/pages/About.tsx
import React from 'react';
import { Award, Code, Globe, Zap } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const expertise = [
    {
      icon: Code,
      title: 'Développement Full Stack',
      description: 'Expertise dans les frameworks modernes comme React, Node.js et les technologies de pointe.',
    },
    {
      icon: Globe,
      title: 'Technologies Web',
      description: 'Connaissance approfondie des principes HTML5, CSS3, JavaScript et de conception réactive.',
    },
    {
      icon: Zap,
      title: 'Optimisation des performances',
      description: 'Créer des applications ultra-rapides avec une expérience utilisateur et un référencement optimaux.',
    },
    {
      icon: Award,
      title: 'Assurance qualité',
      description: 'Des tests rigoureux et un contrôle qualité garantissant des solutions fiables.',
    },
  ];

  return (
    <div className="bg-backgroundDark">
      <Helmet>
        <title>À propos - Mendy Creation</title>
        <meta
          name="description"
          content="Découvrez Mendy Creation, expert en développement web et solutions numériques sur mesure. Notre équipe combine innovation, collaboration et excellence pour créer des expériences digitales performantes et durables."
        />
      </Helmet>

      {/* Hero Section avec fond dynamique identique à Hero.tsx */}
      <section className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden bg-backgroundDark text-textLight">
        {/* Dégradé animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30"></div>

        {/* Bulles animées */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">À propos de Mendy Creation</h1>
          <p className="text-xl text-black max-w-3xl mx-auto animate-fadeIn">
            Nous sommes des développeurs et des concepteurs passionnés qui se consacrent à la création d'expériences numériques exceptionnelles qui ont un impact durable.
          </p>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
            <Link to="/services#nosservices">
              <button className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Voir nos services
              </button>
            </Link>
          </div>           
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative py-20 overflow-hidden text-textLight">
        {/* Vidéo de fond */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
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

        {/* Overlay blanc translucide */}
        <div className="opacity-60"></div>

        {/* Dégradé de fond + bulles */}
        <div className="absolute inset-0 z-20">
          <div className="absolute inset-0  from-accent1 via-backgroundDark to-accent2 opacity-30"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Contenu principal */}
        <div id="nouschoisir" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-6">Nos valeurs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2 animate-fadeIn">Innovation</h3>
                  <p data-aos="fade-up" className="text-black">
                    Nous restons à la pointe de la technologie, apprenant et nous adaptant constamment pour fournir des solutions de pointe qui donnent à nos clients un avantage concurrentiel.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2 animate-fadeIn">Collaboration</h3>
                  <p data-aos="fade-up" className="text-black">
                    Nous croyons qu’il est important de travailler en étroite collaboration avec nos clients en tant que véritables partenaires, de comprendre leur vision et de la traduire en solutions numériques puissantes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2 animate-fadeIn">Excellence</h3>
                  <p data-aos="fade-up" className="text-black">
                    La qualité est primordiale. Nous maintenons les normes les plus strictes pour chaque projet, garantissant un code robuste, évolutif et maintenable.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="bg-white/80 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Pourquoi nous choisir?</h3>
              <ul className="space-y-3 text-black">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  5+ années d'expérience en développement Web
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Plusieurs projets réussis et livrés
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Méthodologie de développement agile
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Assistance et maintenance 24h/24 et 7j/7
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Des prix compétitifs et une communication transparente
                </li>
              </ul>
            </div>
          </div>
          
          {/* Boutton */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="group bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span>Voir plus</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group border-2 border-secondary hover:border-primary text-secondary hover:text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section with background image */}
      <section id="expertise"
        className="py-20 bg-cover bg-center bg-no-repeat text-black"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dwdkltr38/image/upload/v1753972654/theme_ytji1w.png')" }}
      >
        <div className="backdrop-blur-sm py-10">
          <div data-aos="fade-down" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre expertise</h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Nous combinons l’excellence technique avec une vision créative pour fournir des solutions qui dépassent les attentes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/30 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black animate-fadeIn">
            Prêt à démarrer votre projet ?
          </h2>
          <Link to="/contact#contact-form">
            <button className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Commencer dès aujourd'hui
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
