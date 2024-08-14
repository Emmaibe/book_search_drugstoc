/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            default: "#bfbfbf",
            50: "#efefef",
            100: "#bfbfbf",
            500: "#534B4F"
        },
      }
    },
  },
  plugins: [],
}

