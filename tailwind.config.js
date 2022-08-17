module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/*.vue",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFEBEB",
          100: "#FFD1D1",
          200: "#FFA8A8",
          300: "#FF7A7A",
          400: "#FF5252",
          500: "#FF2424",
          600: "#EB0000",
          700: "#AD0000",
          800: "#750000",
          900: "#380000",
        },
        secondary: {
          50: "#F1ECFE",
          100: "#E0D3FD",
          200: "#C5ACFB",
          300: "#A780F9",
          400: "#8B5AF7",
          500: "#6F2FF5",
          600: "#4E0BE0",
          700: "#3A08A5",
          800: "#270570",
          900: "#130336",
        },
      },
      fontFamily: {
        display: "Inter, sans-serif",
        body: "Inter, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
