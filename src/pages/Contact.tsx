// Fichier: src/pages/Contact.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@mendycreation.fr',
      description: 'Envoyez-nous un e-mail à tout moment'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '06.13.64.20.49',
      description: 'Lun-Ven De 9H00 à 18H00'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Savigny-sur-Orge, France',
      description: 'Entreprise privilégiant le télétravail ou sur site client sur rendez-vous'
    },
    {
      icon: Clock,
      title: 'Temps de réponse',
      value: '< 24 hours',
      description: 'Nous répondons rapidement'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden bg-backgroundDark text-textLight ">
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30  " />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-36 h-36  rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Entrer en contact</h1>
          <p className="text-xl text-neutralLight max-w-3xl mx-auto mb-12 animate-fadeIn">
            Prêt à démarrer votre prochain projet ? Discutons de la manière dont nous pouvons vous aidez à concrétiser votre vision grâce à notre expertise en développement web et en solutions numériques.
          </p>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <Link to="/about#nouschoisir">
              <button className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Pourquoi nous choisir ?
              </button>
            </Link>
          </div>            
        </div>
      </section>
      

      {/* Contact Information avec vidéo de fond et glassmorphism */}
      <section className="relative py-20 text-black overflow-hidden bg-white">
        {/* 🎥 Vidéo en fond */}
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

        {/* Voile blanc + flou pour lisibilité */}
        <div className=" bgwhite "></div>

        {/* Bulles animées pastel harmonisées */}
        <div  className="absolute inset-0 opacity-30 pointer-events-none z-0 animate-fadeIn">
          <div className="absolute top-1/3 left-[15%] w-36 h-36 bg-[#fcd9d5] rounded-full blur-[72px] animate-pulse" />
          <div className="absolute bottom-[25%] right-[20%] w-48 h-48 bg-[#fde68a] rounded-full blur-[80px] animate-pulse delay-500" />
          <div className="absolute top-[10%] right-[15%] w-28 h-28 bg-[#93c5fd] rounded-full blur-2xl animate-pulse delay-[800ms]" />
          <div className="absolute bottom-[10%] left-[25%] w-32 h-32 bg-[#bbf7d0] rounded-full blur-[64px] animate-pulse delay-[1200ms]" />
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grille d'infos de contact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600/20 rounded-full mb-4">
                  <info.icon className="h-8 w-8 text-black-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{info.title}</h3>
                <p className="text-blue-400 font-medium mb-1">{info.value}</p>
                <p className="text-sm text-black-300">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Formulaire de contact */}
          <div id="contact-form" className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black animate-fadeIn">Démarrez votre projet aujourd'hui</h2>
              <p className="text-lg text-black-300 animate-fadeIn">
                Remplissez le formulaire ci-dessous et nous vous répondrons avec une proposition détaillée et un rendez-vous.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat text-black relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dwdkltr38/image/upload/v1753972654/theme_ytji1w.png')"
        }}
      >
        {/* flou overlay pour effet verre */}
        <div className="backdrop-blur-sm py-10">
          <div data-aos="fade-down" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black animate-fadeIn">
                Questions fréquemment posées
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white/20 hover:bg-white/30 transition-colors p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#60a5fa]">Combien de temps dure un projet typique ?</h3>
                <p className="text-black">
                  Les délais des projets varient en fonction de la complexité et des exigences. Un site web simple nécessite généralement de 2 à 4 semaines, tandis qu'une application web complexe peut nécessiter de 8 à 16 semaines. Nous vous fournirons un calendrier détaillé lors de notre première consultation.
                </p>
              </div>

              <div className="bg-white/20 hover:bg-white/30 transition-colors p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#60a5fa]">Offrez-vous un service de maintenance continue ?</h3>
                <p className="text-black">
                  Oui ! Nous proposons des forfaits de maintenance complets incluant des mises à jour de sécurité, modifications de contenu, suivi des performances et assistance technique pour assurer le bon fonctionnement de votre site web.
                </p>
              </div>

              <div className="bg-white/20 hover:bg-white/30 transition-colors p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#60a5fa]">Avec quelles technologies travaillez-vous ?</h3>
                <p className="text-black">
                  Nous sommes spécialisés dans les technologies web modernes, notamment React, Vue.js, Angular, Node.js, Python et diverses bases de données. Nous choisissons la  technologie la plus adaptée aux besoins spécifiques de chaque projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
