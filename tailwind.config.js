/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proximanova': ['proxima-nova', 'sans-serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'proxima-nova',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        'fade-in-from-bottom': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 10px, 10px) scale(1)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 10px) scale(1)',
          }
        }
      },
      animation: {
        'fade-in-from-bottom': 'fade-in-from-bottom 800ms cubic-bezier(0.4, 0, 0.25, 1)',
      }
    },
  },
  plugins: [],
}