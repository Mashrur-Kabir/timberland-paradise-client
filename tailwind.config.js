/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "serif"],
        friz: ["Friz", "serif"],
        ysab: ["Ysabeau SC", 'serif'],
        quicksand: ["Quicksand", 'serif']
      },
      scale: {
        '200': '2', // Adds scale-x-200
        '250': '2.5', // Adds scale-x-250
        '300': '3',   // Adds scale-x-300
      },
    },
  },
  plugins: [],
}

