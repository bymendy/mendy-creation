// src/components/WaveCut.tsx
import React from "react";

type Props = {
  bg?: string;         // background de la section qui porte la vague
  stroke?: string;     // liseré
  strokeWidth?: number;
  height?: number;
  flip?: boolean;      // si tu veux l'inverser
};

const WaveCut: React.FC<Props> = ({
  bg = "#FFFFFF",
  stroke = "#00B2FF",
  strokeWidth = 10,
  height = 160,
  flip = false,
}) => {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-[9999]" aria-hidden="true">
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className={`block w-full ${flip ? "rotate-180" : ""}`}
        style={{ height }}
      >
        {/* Fond de section + découpe */}
        <path
          d="M0,120 C220,40 520,10 720,60 C980,125 1220,170 1440,145 L1440,0 L0,0 Z"
          fill={bg}
        />

        {/* Liseré */}
        <path
          d="M0,120 C220,40 520,10 720,60 C980,125 1220,170 1440,145"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export default WaveCut;