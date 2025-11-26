/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c359e", // Dark blue/purple from design
        secondary: "#e92577", // Pink/Red from design
        dark: "#1a1a1a", // Dark mode bg
      },
    },
  },
  plugins: [],
};
