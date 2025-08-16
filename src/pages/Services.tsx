import React from 'react'; 
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { Wrench, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  const benefits = [
    {
      icon: Star,
      title: 'Qualité supérieure',
      description: 'Chaque projet est réalisé avec une attention particulière aux détails et selon les normes de qualité les plus élevées.',
    },
    {
      icon: Clock,
      title: 'Livraison à temps',
      description: 'Nous respectons les délais et livrons les projets dans les délais prévus sans compromettre la qualité.',
    },
    {
      icon: Wrench,
      title: 'Soutien continu',
      description: 'Un support et une maintenance complets pour que votre site Web fonctionne parfaitement.',
    },
  ];

  return (
    <div className=" bg-backgroundDark">
      <Helmet>
        <title>Services - Mendy Creation</title>
        <meta
          name="description"
          content="Découvrez les services de Mendy Creation : développement web sur mesure, plateformes e-commerce, applications personnalisées et solutions numériques innovantes pour booster votre activité."
        />
      </Helmet>

      {/* Hero Section with dynamic background */}
      <section className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden bg-backgroundDark text-textLight">
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Nos services</h1>
          <p className="text-xl text-neutralLight max-w-3xl mx-auto mb-8 animate-fadeIn">
            Des solutions complètes de développement web adaptées à vos besoins. Des applications personnalisées aux plateformes e-commerce, nous avons tout ce qu'il vous faut.
          </p>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/projects#nosprojets">
              <button className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Voir nos projets
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section data-aos="fade-down" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
                {/* Boutton */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group border-2 border-secondary hover:border-primary text-secondary hover:text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>      
        </div>
      </section>

        {/* Benefits Section with glassmorphism background */}
        <section
          id="nosservices"
          className="py-20 bg-cover bg-center bg-no-repeat text-black"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwdkltr38/image/upload/v1753972654/theme_ytji1w.png')",
          }}
        >
          <div data-aos="fade-down" className="backdrop-blur-sm py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
                  Pourquoi choisir nos services?
                </h2>
                <p className="text-xl text-black max-w-3xl mx-auto animate-fadeIn">
                  Nous combinons l’expertise technique avec la compréhension des affaires
                  pour fournir des solutions qui génèrent des résultats.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/30 rounded-full mb-4">
                      <benefit.icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-black">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Bouton vers Booking */}
              <div className="text-center mt-12">
                <Link
                  to="/reservation"
                  className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Discutons ensemble de votre projet
                </Link>
              </div>
            </div>
          </div>
        </section>


    </div>
  );
};

export default Services;
