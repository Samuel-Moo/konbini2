/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
      mosquera: {
          "primary": "#292524", 
          "secondary": "#1c1917",
          "accent": "#00feeb",
          "neutral": "#221F2D",
          "base-100": "#44403c",
          "info": "#b91c1c",
          "success": "#12A178",
          "warning": "#D4B208", 
          "error": "#F45F48"        
        },
      },
    ],
  },
  theme: {
    extend: {
      colors:{
        
      }
    },
  },
  plugins: [require("daisyui")],
}
