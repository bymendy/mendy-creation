import React from 'react';
import Hero from '../components/Hero';
import { Target, Lightbulb, Users } from 'lucide-react';





const Home: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Précision et qualité',
      description: 'Chaque ligne de code est élaborée avec une attention particulière aux détails et un engagement envers l\'excellence.'
    },
    {
      icon: Lightbulb,
      title: 'L\'innovation d\'abord',
      description: 'Nous exploitons des technologies de pointe pour fournir des solutions modernes et évolutives.'
    },
    {
      icon: Users,
      title: 'Partenariat client',
      description: 'Votre réussite est notre mission. Nous travaillons en étroite collaboration avec vous tout au long de votre parcours.'
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Mission Statement */}
      <section id='mission'
        className="py-20 bg-backgroundDark bg-cover bg-center bg-no-repeat text-black"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dwdkltr38/image/upload/v1753972654/theme_ytji1w.png')" }}>
        <div data-aos="fade-up" className="backdrop-blur-sm py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">Notre mission</h2>
              <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed animate-fadeIn">
                Chez Mendy Creation, nous transformons les idées en réalités numériques puissantes. Nous sommes spécialisés dans la création d'applications web sur mesure, de sites web modernes et de solutions numériques complètes qui stimulent la croissance des entreprises et l'engagement des utilisateurs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/30 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-black leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;