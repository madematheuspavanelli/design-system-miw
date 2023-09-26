/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        DEFAULT: "#0047FF",
        dark: "#44546F",
      },
      black: "#000000",
      graphite: "#404040",
      grey: {
        medium: "#9B9B9B",
        DEFAULT: "#E5E5E5",
        white: "#F8F8F8",
      },
      white: "#FFFFFF",
      priority: {
        red: "#FC2E53",
      },
      tag: {
        blue: "#E3EEFD",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
