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
          DEFAULT: '#0A3D62', // Deep navy blue
          light: '#1E5B8A',
          dark: '#072A44',
        },
        accent: {
          DEFAULT: '#F57C00', // Vibrant orange
          light: '#FFA726',
          dark: '#E65100',
        },
        neutral: {
          DEFAULT: '#E5E7EB', // Light grey
          light: '#F9FAFB',
          dark: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}