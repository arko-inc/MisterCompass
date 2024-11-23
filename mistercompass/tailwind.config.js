/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      fontFamily: {
        against: ['Against', 'sans-serif'], // Add the custom font
      },
      keyframes: {
        inflateDeflate: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "inflate-deflate": "inflateDeflate 2s infinite",
      },
    },
  },
  plugins: [],
};