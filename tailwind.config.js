/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD900',        // Jaune vif
        secondary: '#00B2FF',      // Bleu ciel vif
        tertiary: '#F7B1D1',       // Rose pastel
        accent1: '#B78CE1',        // Violet doux
        accent2: '#FF9A5C',        // Orange clair
        neutralLight: '#000000',   // Noir pour contraste
        textDark: '#1E1E1E',
        textLight: '#121212',
        backgroundDark: '#FFFFFF',
        bgwhite: '#ffffff',        // Blanc pur
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
