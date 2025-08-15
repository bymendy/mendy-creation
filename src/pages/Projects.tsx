// Fichier: src/pages/Projects.tsx 
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects, categories } from '../data/projects';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="">
      <Helmet>
        <title>Projets - Mendy Creation</title>
        <meta
          name="description"
          content="Découvrez les projets réalisés par Mendy Creation : sites web, applications et solutions numériques innovantes. Un portfolio qui reflète notre savoir-faire et notre engagement pour l'excellence."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden bg-backgroundDark text-textLight">
        <div className="absolute inset-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Nos projets</h1>
          <p className="text-xl text-neutralLight max-w-3xl mx-auto mb-12 animate-fadeIn">
            Découvrez notre portefeuille de projets réussis dans divers secteurs et technologies. Chaque projet témoigne de notre engagement envers l'excellence et l'innovation.
          </p>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/contact#faq">
              <button className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Des interrogations ?
              </button>
            </Link>
          </div>          
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-backgroundDark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 border-2 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black border-yellow-400 shadow-md hover:bg-yellow-300'
                    : 'bg-transparent text-blue-400 border-blue-400 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="nosprojets" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat text-black relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwdkltr38/image/upload/v1753972654/theme_ytji1w.png')",
        }}
      >
        <div data-aos="fade-down" className="backdrop-blur-sm py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black animate-fadeIn">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto animate-fadeIn">
              Discutons de la manière dont nous pouvons donner vie à votre vision grâce à notre expertise et notre passion pour l'excellence.
            </p>

            <Link to="/contact#contact-form">
              <button className="bg-primary hover:bg-yellow-400 text-textDark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Prendre contact
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
