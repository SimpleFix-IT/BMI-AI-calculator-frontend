/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ✅ Ensure Tailwind works inside Vue files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
