// Fichier: src/components/ProjectCard.tsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">

      {/* Fond dynamique animé */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-secondary rounded-full filter blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Contenu de la carte */}
      <div className="relative z-10 bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors">
                  <Github className="h-5 w-5" />
                </button>
              </a>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <span className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium text-gray-200 bg-slate-700/50 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
