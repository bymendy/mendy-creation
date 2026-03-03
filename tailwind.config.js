/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD900",
        secondary: "#00B2FF",
        tertiary: "#F7B1D1",
        accent1: "#B78CE1",
        accent2: "#FF9A5C",
        neutralLight: "#000000",
        textDark: "#1E1E1E",
        textLight: "#121212",
        backgroundDark: "#FFFFFF",
        bgwhite: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        counter: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        orbit: "orbit 40s linear infinite",
        counter: "counter 40s linear infinite",
      },
    },
  },
  plugins: [],
};
