/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        typeNormal: ["Audi Type Normal", "sans-serif"],
        typeBold: ["Audi Type Bold", "sans-serif"],
        extendedNormal: ["Audi Type Extended Normal", "sans-serif"],
        extendedBold: ["Audi Type Extended Bold", "sans-serif"],
        wideLight: ["Audi Type Wide Light", "sans-serif"],
        wideNormal: ["Audi Type Wide Normal", "sans-serif"],
        wideBold: ["Audi Type Wide Bold", "sans-serif"]
      },
      borderWidth: {
        "1": "1px",
      }
    },
  },
  plugins: [],
}
