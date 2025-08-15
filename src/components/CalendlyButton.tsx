import React from 'react';

type Props = {
  url?: string;               // ex: https://calendly.com/TON-IDENTIFIANT
  label?: string;             // ex: "Réserver un appel"
  className?: string;         // classes utilitaires Tailwind
};

const CalendlyButton: React.FC<Props> = ({
  url = 'https://calendly.com/TON-IDENTIFIANT',
  label = 'Réserver un appel',
  className = 'inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/80 transition',
}) => {
  const handleClick = () => {
    // @ts-ignore – le script Calendly est injecté globalement
    if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url });
    } else {
      // fallback: ouvrir la page publique Calendly
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
};

export default CalendlyButton;
