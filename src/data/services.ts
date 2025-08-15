export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
    {
    id: 'cms-development',
    title: 'Développement Site CMS',
    description: 'Systèmes de gestion de contenu qui vous permettent de mettre à jour et de gérer facilement le contenu de votre site Web.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Développement de CMS personnalisé',
      'Personnalisation de WordPress',
      'Gestion des rôles utilisateurs',
      'Optimisation des flux de travail de contenu',
      'Support multilingue'
    ],
    price: 'À partir de 2 500 €'
  },
  {
    id: 'custom-web-development',
    title: 'Développement Site Web Personnalisé',
    description: 'Des applications Web sur mesure construites avec des cadres et des technologies modernes pour répondre aux besoins spécifiques de votre entreprise.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Applications React, Vue.js ou Angular',
      'Développement backend JAVA ou PHP',
      'Conception et intégration de bases de données',
      'Développement et intégration d’API',
      'Conception réactive sur tous les appareils'
    ],
    price: 'À partir de 3 000 €'
  },
  {
    id: 'ecommerce-solutions',
    title: 'Solutions de commerce électronique',
    description: 'Solutions de boutique en ligne complètes avec intégration de paiement, gestion des stocks et interfaces conviviales.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Développement de panier d\'achat personnalisé',
      'Intégration de passerelle de paiement',
      'Systèmes de gestion des stocks',
      'Suivi et gestion des commandes',
      'Optimisation SEO pour les produits'
    ],
    price: 'À partir de 5 000 €'
  },

  {
    id: 'mobile-responsive-design',
    title: 'Conception adaptée aux mobiles',
    description: 'Assurez-vous que votre site Web est parfait et fonctionne parfaitement sur tous les appareils et tailles d\'écran.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Approche de conception mobile-first',
      'Compatibilité entre navigateurs',
      'Interfaces adaptées aux écrans tactiles',
      'Chargement rapide sur les réseaux mobiles',
      'Fonctionnalités d\'application Web progressives (PWA)'
    ],
    price: 'À partir de 1 500 €'
  },
  {
    id: 'performance-optimization',
    title: 'Optimisation des performances',
    description: 'Accélérez votre site Web et améliorez l\'expérience utilisateur grâce à des techniques d\'optimisation avancées.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Optimisation des Core Web Vitals',
      'Optimisation des images et des ressources',
      'Stratégies de mise en cache',
      'Optimisation des requêtes de base de données',
      'Mise en œuvre de CDN (Content Delivery Network)'
    ],
    price: 'À partir de 1 200 €'
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Maintenance continue du site Web, mises à jour et support technique pour garantir le bon fonctionnement de votre site.',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Surveillance et support 24/7',
      'Mises à jour de sécurité régulières',
      'Mises à jour et modifications de contenu',
      'Surveillance des performances',
      'Services de sauvegarde et de récupération'
    ],
    price: 'À partir de 300 €/mois'
  }
];