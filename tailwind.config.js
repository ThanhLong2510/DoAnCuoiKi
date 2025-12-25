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
          DEFAULT: '#06b6d4',
          dark: '#0ea5e9',
        },
        accent: {
          cyan: '#06b6d4',
          blue: '#0ea5e9',
          purple: '#8b5cf6',
        },
        bg: {
          white: '#ffffff',
          light: '#f8fbff',
          lighter: '#e6f4ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


