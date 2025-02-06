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
        raleway: ["Raleway", "sans-serif"],
        friz: ["Friz", "serif"],
      },
    },
  },
  plugins: [],
}

