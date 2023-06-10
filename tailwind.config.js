/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        tosca: "#20ad96",
        "light-yellow": "#faf8f6",
        purple: "#333461",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans"],
      },
      backgroundImage: {
        "hero-home": "url('/pexels-andrea-piacquadio-3978564 1.png')",
        transform: "url('/transform.png')",
      },
    },
  },
  plugins: [],
};
