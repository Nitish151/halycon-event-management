/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3498db',
          hover: '#2980b9',
        },
        secondary: {
          DEFAULT: '#2c3e50',
          light: '#34495e',
        },
        success: {
          DEFAULT: '#27ae60',
          hover: '#229954',
        },
        danger: {
          DEFAULT: '#e74c3c',
          hover: '#c0392b',
        },
      },
    },
  },
  plugins: [],
}
