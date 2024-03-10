/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary-color': "hsl(var(--primary-color))",
        'btn-bg' : "hsl(var(--btn-bg))",
        'btn-text' : "hsl(var(--btn-text))",
      }
    },
  },
  plugins: [],
}

