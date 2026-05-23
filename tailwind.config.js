/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4338ca",
        primaryHover: "#3730a3",
        secondary: "#ea2678",
        success: "#00ab6b",
        dark: "#1a1a1a",
        accent: "#4731D3",
        accentDark: "#B7AAFF",
        gray: {
          500: "#6b7280",
          800: "#1f2937",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 25px 65px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
