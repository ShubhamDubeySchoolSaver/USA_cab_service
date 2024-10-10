/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        'da-pri-col': '#243c5a',
        'da-secondary-col': '#243c5a',
        'da-tertiary-col': '#f5f5f5',
        'da-quaternary-col': '#ffffff',
        'li-pri-col': '#4caf50',
        'li-secondary-col': '#243c5a',
        'li-tertiary-col': '#f5f5f5',
        'li-quaternary-col': '#ffffff',
        
      },
    },
  },
  plugins: [],
};
