// Fichier: src/components/Hero.tsx
import React from 'react';

import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import GoogleReviewsEmbed from "../components/GoogleReviewsEmbed";

const Hero: React.FC = () => {
  return (
    <>
      {/* 🎥 Hero avec vidéo en fond */}
      <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden text-textLight bg-backgroundDark ">
        {/* Vidéo en arrière-plan */}
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

        {/* Voile pour lisibilité */}
        <div className=""></div>

        {/* Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-secondary mr-2" />
            <span className="text-secondary font-semibold text-lg animate-fadeIn">
              Premium Web Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent1 to-secondary bg-clip-text text-transparent animate-fadeIn">
            Mendy Creation
          </h1>

          <p className="text-xl md:text-3x1 text-neutralLight mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
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

        {/* Séparateur wave en bas du Hero */}

      </section>

      {/* ✅ Section 3 projets avec dégradé + bulles + bloc “À propos” */}
      <section className="relative py-20 pb-24 bg-backgroundDark text-white overflow-hidden">
        {/* Dégradé de fond animé */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30"
          aria-hidden="true"
        ></div>

        {/* Bulles animées */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenu en 2 colonnes : À propos + Vidéo */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h1 className="text-3xl md:text-4xl font-bold text-black mt-16 mb-8 animate-fadeIn">
                Mendy Creation met en lumière votre savoir-faire
              </h1>
              <p className="text-xl text-black max-w-2xl animate-fadeIn">
                Nous aidons les artisans et entrepreneurs à passer au digital avec des sites modernes, clairs et efficaces.
              </p>
              <div id="about-button" className="mt-8">
                <Link to="/services#nosservices">
                  <button className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    Nos services
                  </button>
                </Link>
              </div>
            </div>

            {/* Vidéo à côté */}
            <div
              id="about-video"
              className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="https://res.cloudinary.com/dwdkltr38/video/upload/v1756158488/vod-hooks-mendycreation_xqddaz.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0"></div>
            </div>
          </div>

          {/* Projets phares */}
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mt-16 mb-8 animate-fadeIn">
            Nos projets phares
          </h2>

          <div data-aos="fade-down" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bouton */}
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

          {/* Avis Google */}
          <div className="mt-12">
            <GoogleReviewsEmbed />
          </div>
        </div>
        {/*  Séparateur wave en bas de la section projets */}

      </section>
    </>
  );
};

export default Hero;