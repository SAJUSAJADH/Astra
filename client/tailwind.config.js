/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '1000px',
      lg: '1100px',
      xl: '1440px'
    },
    fontFamily: {
      dm: ["DM Serif Display","serif"],
      ka: ['Kalnia', 'serif'],
      aladin: ["Aladin", 'serif']
    },
    extend: {},
  },
  plugins: [],
}

