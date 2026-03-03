// src/hooks/useStandalone.ts
import { useEffect, useState } from "react";

export function useStandalone() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone === true;

      setIsStandalone(isStandaloneMode);
    };

    checkStandalone();
  }, []);

  return isStandalone;
}