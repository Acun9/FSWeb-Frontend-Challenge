/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4731d3",
        secondary: "#ea2678",
        success: "#00ab6b",
        dark: "#1a1a1a",
        slate: {
          700: "#5f6b7b",
        },
      },
    },
  },
  plugins: [],
};
