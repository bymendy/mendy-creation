import React from "react";
import { useCookieConsent, ConsentPrefs } from "../context/CookieConsent";
import { X } from "lucide-react";

/** Modal de réglages des cookies (analytics/marketing).
 *  S’ouvre quand `open === true` dans le contexte.
 */
const CookieSettingsModal: React.FC = () => {
  const { open, setOpen, prefs, setPrefs, saveAndClose, acceptAll, rejectAll } =
    useCookieConsent();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      {/* panel */}
      <div className="relative z-[101] w-[92%] max-w-xl rounded-2xl bg-white p-6 text-black shadow-2xl">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold">Préférences de cookies</h3>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="p-2 rounded-md hover:bg-black/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Essential */}
        <div className="mt-6 space-y-4">
          <section className="rounded-xl border border-gray-200 bg-white/70 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Essentiels</h4>
                <p className="text-sm text-gray-600">
                  Nécessaires au fonctionnement (toujours actifs).
                </p>
              </div>
              <span className="select-none rounded-full bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-700">
                Activés
              </span>
            </div>
          </section>

          {/* Analytics */}
          <section className="rounded-xl border border-gray-200 bg-white/70 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Mesure d’audience (Analytics)</h4>
                <p className="text-sm text-gray-600">
                  Aide à comprendre l’usage du site pour l’améliorer.
                </p>
              </div>

              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={prefs.analytics}
                  onChange={(e) =>
                    setPrefs({ ...prefs, analytics: e.target.checked } as ConsentPrefs)
                  }
                />
                <div className="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-blue-600" />
                <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
              </label>
            </div>
          </section>

          {/* Marketing */}
          <section className="rounded-xl border border-gray-200 bg-white/70 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Marketing</h4>
                <p className="text-sm text-gray-600">
                  Personnalisation / contenus sponsorisés.
                </p>
              </div>

              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={prefs.marketing}
                  onChange={(e) =>
                    setPrefs({ ...prefs, marketing: e.target.checked } as ConsentPrefs)
                  }
                />
                <div className="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-blue-600" />
                <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
              </label>
            </div>
          </section>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={rejectAll}
            className="rounded-xl border border-gray-300 px-5 py-2 font-semibold text-gray-800 hover:bg-gray-50"
          >
            Tout refuser
          </button>
          <button
            onClick={acceptAll}
            className="rounded-xl border border-blue-600 bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Tout accepter
          </button>
          <button
            onClick={() => saveAndClose()}
            className="rounded-xl border border-yellow-400 bg-yellow-400 px-5 py-2 font-semibold text-black hover:bg-yellow-300"
          >
            Enregistrer
          </button>
        </div>

        {/* Liens utiles */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Consultez notre{" "}
          <a href="/politique-de-confidentialite" className="text-blue-600 underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
