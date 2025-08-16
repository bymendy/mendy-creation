import React from "react";
import { useCookieConsent } from "../context/CookieConsent";

const CookieBanner: React.FC = () => {
  const { bannerVisible, acceptAll, rejectAll, setOpen } = useCookieConsent();

  if (!bannerVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-4">
      <div className="max-w-4xl w-full rounded-2xl bg-white/90 backdrop-blur shadow-lg border border-gray-200 p-4 text-black">
        <p className="text-sm">
          Nous utilisons des cookies essentiels pour le fonctionnement du site et,
          avec votre accord, des cookies pour mesurer l’audience et personnaliser le
          contenu. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies. {" "}
                     <a
            href="/politique-de-confidentialite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Politique de confidentialité
          </a>{" "}
        </p>
        <div className="mt-3 flex flex-wrap gap-3 justify-end">
          <button
            onClick={rejectAll}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50"
          >
            Tout refuser
          </button>
          <button
            onClick={acceptAll}
            className="rounded-lg border border-blue-600 bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700"
          >
            Tout accepter
          </button>
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg border border-yellow-400 bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
          >
            Gérer mes cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
