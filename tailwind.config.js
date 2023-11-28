/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b",
        dark: "#160f2a",
        white: "#fff",
        transparent: "transparent",
        blue: "#1fb6ff",
        red: "#c9090d",
        purple: "#4c27c2",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        "anti-flash-white" : "#edf2f8",
      },
      screens: {
        "2xl": "1320px",
        'xl-max': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg-max': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md-max': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'sm-max': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
