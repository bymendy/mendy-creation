
// Fichier: src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [

  {
    id: 'batiment-site',
    title: 'Site Vitrine - Mondelice Bâtiment',
    description: 'Un site vitrine moderne pour une entreprise de construction familiale, avec une présentation claire des services, une galerie de réalisations, et un formulaire de demande de devis. Site rapide, élégant et responsive.',
    image: 'https://res.cloudinary.com/dwdkltr38/image/upload/v1753979570/site_mondelice_batiment_xsnaq2.png',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS',],
    category: 'Web Site',
    liveUrl: 'https://mondelicebatiment.fr/',
  },

  {
    id: 'ecommerce-platform',
    title: 'Plateforme E-commerce moderne',
    description: 'Une boutique en ligne complète avec des filtres avancés, une intégration de paiement et un tableau de bord administrateur. Construit avec WordPress et WooCommerce.',
    image: 'https://res.cloudinary.com/dwdkltr38/image/upload/v1753979520/site_mac_securite_guaf6s.png',
    technologies: ['WooCommerce',  'PHP', 'JavaScript', 'CSS',],
    category: 'E-commerce',
    liveUrl: 'https://macsecurite.store/',
  },
  {
    id: 'portfolio-website',
    title: 'Site Web Portfolio',
    description: 'Un portfolio moderne et design avec des animations fluides et des éléments interactifs.',
    image: 'https://res.cloudinary.com/dwdkltr38/image/upload/v1754498610/portfolio-barry_mendy_hjh9r5.png',
    technologies: ['Astro', 'JavaScript', 'CSS', 'HTML'],
    category: 'Portfolio',
    liveUrl: 'https://by.mendycreation.fr/'
  },

  
  {
    id: 'macsecurite-site',
    title: 'Site Professionnel - Sur Mesure',
    description: 'Un site professionnel sur mesure pour Mac Sécurité Center, mettant en avant ses services, ses valeurs et son expertise dans le domaine de la sécurité privée. Design moderne, responsive, avec sections claires pour les offres.',
    image: 'https://res.cloudinary.com/dwdkltr38/image/upload/v1753979554/site_macsecurite_center_hlk6gn.png',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS',],
    category: 'Web Site',
    liveUrl: 'https://www.macsecuritecenter.com/',
  },
  {
    id: 'site-platform-vtc',
    title: 'Site VTC - Brianto',
    description: 'Un site responsive dédié aux services VTC, avec réservation en ligne, affichage clair des tarifs et formulaire de contact rapide. Interface fluide adaptée aux mobiles, intégrée à un système de gestion de planning chauffeur.',
    image: 'https://res.cloudinary.com/dwdkltr38/image/upload/v1753979535/site_brianto_vtc_fd2pj8.png',
    technologies: ['CMS','HTML', 'CSS', 'JavaScript','PHP', 'TypeScript'],
    category: 'CMS',
    liveUrl: 'https://briantovtc.fr/',
  },
  {
    id: 'mobile-app',
    title: 'Mobile-First Web App',
    description: 'Plateforme d’analyse prédictive développée pour identifier les segments de clients à fort potentiel. Intégration d’un modèle de scoring et d’une segmentation comportementale afin d’orienter les campagnes marketing. ',
    image: 'https://res.cloudinary.com/dwdkltr38/image/upload/v1753981433/app_bank_xuk6ve.png',
    technologies: ['PYTHON', 'Pandas', 'Scikit-learn', 'Streamlit'],
    category: 'App',
    liveUrl: 'https://appbank.streamlit.app/',
    githubUrl: 'https://github.com/bymendy/miniprojet_msc_dm1_app/blob/main/app.py'
  },
  {
    id: 'saas-dashboard',
    title: 'Dashboard d\'Analyse',
    description: 'Dashboard d\'analyse complet avec visualisation des données en temps réel.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['SQL', 'Google Looker Studio'],
    category: 'Dashboard',
    liveUrl: 'https://lookerstudio.google.com/reporting/d3fe060d-6ed7-40db-a861-d4a7b4b20e88'
  },  
];

export const categories = ['All', 'E-commerce', 'Web Site','Portfolio', 'Dashboard',  'CMS', 'App'];