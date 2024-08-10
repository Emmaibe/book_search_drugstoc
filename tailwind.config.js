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
            default: "#FDF5F2",
            100: "#FDF5F2",
            500: "#C6A7A5"
        },
      }
    },
  },
  plugins: [],
}

