// Fichier : src/context/CookieConsent.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/** Préférences de consentement.
 * - `essential` est un littéral `true` (toujours actif, non désactivable)
 * - `analytics` / `marketing` sont contrôlés par l'utilisateur
 */
export type ConsentPrefs = {
  essential: true;       // non désactivable
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = {
  prefs: ConsentPrefs;
  updatedAt: number;     // epoch ms
  version: number;       // pour gérer d'éventuelles migrations
};

const STORAGE_KEY = "mc_consent_v1";

// Valeurs par défaut si aucun consentement n'est stocké
const DEFAULT_PREFS: ConsentPrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

/* ===================== helpers localStorage ===================== */

function loadStored(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (!parsed || !parsed.prefs) return null;

    // garde‑fous : on force essential à true (littéral)
    const prefs: ConsentPrefs = {
      essential: true as true,
      analytics: !!parsed.prefs.analytics,
      marketing: !!parsed.prefs.marketing,
    };

    return {
      version: 1,
      updatedAt: typeof parsed.updatedAt === "number" ? parsed.updatedAt : Date.now(),
      prefs,
    };
  } catch {
    return null;
  }
}

function saveStored(prefs: ConsentPrefs) {
  try {
    const payload: StoredConsent = {
      version: 1,
      updatedAt: Date.now(),
      prefs,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // silencieux (quota / navigation privée / SSR)
  }
}

/* ========================= Contexte ============================= */

type CookieContextType = {
  /** préférences actuelles */
  prefs: ConsentPrefs;
  /** setter brut si besoin (forme fonctionnelle possible) */
  setPrefs: React.Dispatch<React.SetStateAction<ConsentPrefs>>;

  /** bannière visible ? (si aucune préférence encore enregistrée) */
  bannerVisible: boolean;

  /** état d’ouverture de la modale "Paramètres cookies" */
  open: boolean;
  setOpen: (v: boolean) => void;

  /** ouvrir directement la modale de réglages (pour un bouton "Gérer mes cookies") */
  openSettings: () => void;

  /** actions rapides */
  acceptAll: () => void;
  rejectAll: () => void;

  /** enregistre et ferme (peut recevoir un override partiel) */
  saveAndClose: (override?: Partial<ConsentPrefs>) => void;
};

const CookieContext = createContext<CookieContextType | null>(null);

/** Hook d’accès au contexte (avec garde) */
export const useCookieConsent = () => {
  const ctx = useContext(CookieContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
};

/** Provider racine à placer autour de l’app (dans main.tsx) */
export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // On charge le consentement stocké (mémo pour éviter la relecture à chaque render)
  const stored = useMemo(loadStored, []);
  const [prefs, setPrefs] = useState<ConsentPrefs>(stored?.prefs ?? DEFAULT_PREFS);

  // La bannière est visible tant qu'aucun consentement n'a été posé
  const [bannerVisible, setBannerVisible] = useState<boolean>(!stored);

  // État d’ouverture de la modale de réglages
  const [open, setOpen] = useState(false);

  // (Facultatif) exposer dans window pour debug
  useEffect(() => {
    (window as any).__mcConsent = prefs;
  }, [prefs]);

  /* ===================== Actions ===================== */

  const openSettings = () => setOpen(true);

  const acceptAll = () => {
    const next: ConsentPrefs = { essential: true, analytics: true, marketing: true };
    setPrefs(next);
    saveStored(next);
    setBannerVisible(false);
    setOpen(false);
  };

  const rejectAll = () => {
    const next: ConsentPrefs = { essential: true, analytics: false, marketing: false };
    setPrefs(next);
    saveStored(next);
    setBannerVisible(false);
    setOpen(false);
  };

  const saveAndClose = (override?: Partial<ConsentPrefs>) => {
    const next: ConsentPrefs = {
      ...prefs,
      ...override,
      essential: true as true, // on garde le littéral
    };
    setPrefs(next);
    saveStored(next);
    setBannerVisible(false);
    setOpen(false);
  };

  const value: CookieContextType = {
    prefs,
    setPrefs,
    bannerVisible,
    open,
    setOpen,
    openSettings,
    acceptAll,
    rejectAll,
    saveAndClose,
  };

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
};
