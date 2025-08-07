import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Service } from '../data/services';



interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">

      {/* Fond dynamique identique au Hero */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent1 via-backgroundDark to-accent2 opacity-30"></div>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-secondary rounded-full filter blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Contenu de la carte */}
      <div className="relative z-10 bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-blue-400 mb-3"> Caractéristiques principales</h4>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-400">{service.price}</span>
            <button className="group/btn flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              {/* <span className="text-sm font-medium">En savoir plus</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
