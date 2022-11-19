const { screens, borderRadius } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      ...screens,
    },
    extend: {
      colors: {
        'main-orange': '#FF5833',
        'mid-white': '#EDCDC6',
        'procrastinator-blue': '#59B5F8',
        'oya-green': '#12B981',
      },
      fontSize: {
        "portfolio-xsm": "14px",
        "portfolio-sm": "16px",
        "portfolio-md": "18px",
      },
      height: {
        "portfolio-h-nav": "10%",
        "portfolio-h-hero": "90%",
        "5/2": "40%",
        "portfolio-px-40": "40px",
        "portfolio-px-300": "300px",
        "portfolio-px-450": "450px",
      },
      width: {
        "portfolio-px-270": "270px",
        "portfolio-px-300": "300px",
        "portfolio-px-350": "350px",
        "portfolio-px-400": "400px",
        "portfolio-px-124": "124px",
        "portfolio-px-120": "120px",
      },
      borderRadius: {
        "portfolio-px-20": "20px",
      },
      fontFamily: {
        "portfolio-poppins": "Poppins",
      },
    },
  },
  plugins: [],
};
