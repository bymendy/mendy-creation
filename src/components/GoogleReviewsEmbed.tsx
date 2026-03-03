// src/components/GoogleReviewsEmbed.tsx
import React, { useEffect } from "react";

const ELFSIGHT_APP_CLASS = "elfsight-app-db351cbe-88e5-48ce-9f22-60088c423336";

const GoogleReviewsEmbed: React.FC = () => {
  useEffect(() => {
    const id = "elfsight-platform-js";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://elfsightcdn.com/platform.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="relative mt-12">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-center text-black/70 mt-1">
          Avis Google vérifiés — mis à jour automatiquement
        </p>

        {/* Widget Elfsight */}
        <div className={`${ELFSIGHT_APP_CLASS}`} data-elfsight-app-lazy />

        {/* Bouton “Écrire un avis” (optionnel) */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJz4z2eTC-cQYRV6JDmVwkoiM"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold shadow
                       border-2 border-secondary text-secondary
                       hover:border-primary hover:text-textDark transition"
          >
            Écrire un avis
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsEmbed;
