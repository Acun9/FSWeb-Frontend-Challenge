/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4338ca" /* indigo-700 from styleguide */,
        primaryHover: "#3730a3" /* indigo-800 from styleguide */,
        secondary: "#ea2678",
        success: "#00ab6b",
        dark: "#1a1a1a",
        gray: {
          500: "#6b7280",
          800: "#1f2937",
        },
      },
    },
  },
  plugins: [],
};
