/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0E0E10',
          light: '#FFFFFF',
        },
        text: {
          DEFAULT: '#EAEAEA',
          light: '#1F2937',
        },
        accent: {
          DEFAULT: '#4C6FFF',
          light: '#4C6FFF',
        },
        muted: {
          DEFAULT: '#9CA3AF',
          light: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

