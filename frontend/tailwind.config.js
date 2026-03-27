/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C25E2E", // Burnt Terracotta
        "primary-container": "#823b18",
        "surface": "#0F1121", // Midnight Indigo
        "on-surface": "#F4EAD5", // Heritage Cream
        "on-surface-variant": "#F4EAD5/70",
        "outline": "#C25E2E/40",
        "midnight": "#0F1121",
      },
      fontFamily: {
        "headline": ["Epilogue", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}