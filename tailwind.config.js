/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#0A1220",
          900: "#0E1930",
          800: "#142544",
          700: "#1C325C",
          600: "#274377",
          500: "#345598",
        },
        signal: {
          50: "#ECFBF9",
          100: "#D1F5EF",
          200: "#A3EBDF",
          300: "#6BDBCB",
          400: "#37C2B0",
          500: "#17A398",
          600: "#0F8579",
          700: "#0C6A62",
          800: "#0B544F",
          900: "#0A4541",
        },
        buoy: {
          amber: "#D98E28",
          coral: "#E0654F",
          slate: "#5B7083",
        },
      },
      backgroundImage: {
        corrugate:
          "repeating-linear-gradient(90deg, rgba(23,163,152,0.10) 0px, rgba(23,163,152,0.10) 2px, transparent 2px, transparent 14px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,18,32,0.04), 0 1px 0 rgba(10,18,32,0.03)",
      },
    },
  },
  plugins: [],
};
