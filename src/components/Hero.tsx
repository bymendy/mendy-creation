// Fichier: src/components/Hero.tsx
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Hero: React.FC = () => {
  return (
    <>
      {/* 🎥 Hero avec vidéo en fond */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-textLight bg-backgroundDark ">
        {/* Vidéo en arrière-plan */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 "
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

        {/* Voile pour lisibilité */}
        <div className=""></div>

        {/* Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center ">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-secondary mr-2" />
            <span className="text-secondary font-semibold text-lg animate-fadeIn">Premium Web Solutions</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent1 to-secondary bg-clip-text text-transparent animate-fadeIn">
            Mendy Creation
          </h1>

          <p className="text-xl md:text-2xl text-neutralLight mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            Concevons ensemble des expériences web uniques, alliant design sur-mesure et technologies innovantes pour propulser votre présence en ligne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="group bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span>Voir nos services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group border-2 border-secondary hover:border-primary text-secondary hover:text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Commencer
            </Link>
          </div>
        </div>
      </section>

      {/* 🎨 Section 3 projets avec dégradé et bulles */}
      <section  className="relative py-20 bg-backgroundDark text-white overflow-hidden">
        {/* Dégradé de fond animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30 z-0 bgwhite"></div>
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Contenu projet */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center mb-8 animate-fadeIn">
            Nos projets phares
          </h2>
          <div data-aos="fade-down" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
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
    </>
  );
};

export default Hero;
