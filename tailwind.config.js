/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#faf6f8",
          100: "#f3ebef",
          200: "#e5d4dc",
          300: "#c9a8b8",
          400: "#a87d94",
          500: "#8b5a75",
          600: "#6f4560",
          700: "#5c3d52",
          800: "#4a3144",
          900: "#3d2840",
          950: "#2d1a28",
        },
        rose: {
          50: "#fdf5f7",
          100: "#fce8ec",
          200: "#f9d0d9",
          300: "#f2a8b8",
          400: "#e88a9e",
          500: "#d46b82",
          600: "#c2556e",
          700: "#a3445a",
          800: "#873b4d",
          900: "#723645",
          DEFAULT: "#d46b82",
          light: "#f2a8b8",
          dark: "#a3445a",
        },
        champagne: {
          50: "#fdf9f3",
          100: "#f9f0e3",
          200: "#f0dfc4",
          300: "#e8d5b5",
          400: "#d4b896",
          500: "#c9a86c",
          600: "#b8956b",
          700: "#9a7a52",
          800: "#7d6344",
          900: "#665139",
          DEFAULT: "#d4b896",
          light: "#e8d5b5",
          dark: "#b8956b",
        },
        ivory: {
          50: "#fffcf8",
          100: "#f9f3eb",
          200: "#f0e6d8",
          300: "#e5d5c3",
          400: "#d4c0a8",
          500: "#c4ab90",
        },
        sage: {
          50: "#f4f6f2",
          100: "#e6ebe0",
          200: "#cdd7c4",
          300: "#9baa88",
          400: "#7d8b6a",
          500: "#637256",
          DEFAULT: "#7d8b6a",
          light: "#9baa88",
          dark: "#637256",
        },
        wine: {
          DEFAULT: "#2d1a28",
          light: "#3d2840",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(45,26,40,0.82) 0%, rgba(92,61,82,0.65) 45%, rgba(212,107,130,0.35) 100%)",
        "hero-shine":
          "radial-gradient(ellipse at 70% 20%, rgba(232,213,181,0.18) 0%, transparent 55%)",
        "btn-primary":
          "linear-gradient(135deg, #d46b82 0%, #c2556e 50%, #b8956b 100%)",
        "btn-primary-hover":
          "linear-gradient(135deg, #c2556e 0%, #a3445a 50%, #9a7a52 100%)",
        "nav-glass":
          "linear-gradient(180deg, rgba(255,252,248,0.97) 0%, rgba(249,243,235,0.95) 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(92, 61, 82, 0.12)",
        glow: "0 8px 32px -8px rgba(212, 107, 130, 0.35)",
        card: "0 12px 40px -12px rgba(45, 26, 40, 0.15)",
      },
    },
  },
  plugins: [],
};
