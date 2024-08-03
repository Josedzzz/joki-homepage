/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#131515",
        "custom-dark-translucent": "rgba(19, 21, 21, 0.5)", // Fondo semitransparente
      },
      backdropBlur: {
        none: "none",
        blur: "blur(10px)", // Filtro de difuminado
      },
    },
  },
  plugins: [],
};
