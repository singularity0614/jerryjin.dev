/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        maxHeight: 'max-height',
        margin  : 'margin',
      },
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
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '40%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          }
        },
        'slide-in-from-top': {
          '0%': {
            margin: '0',
            maxHeight: '0px',
            transform: 'translate3d(0, -50px, 0) scale(1)',
          },
          '100%': {
            margin: '0.5rem auto',
            maxHeight: '200px',
            transform: 'translate3d(0, 0, 0) scale(1)',
          },
        },
        'slide-out-to-top': {
          '0%': {
            margin: '0.5rem auto',
            maxHeight: '200px',
            transform: 'translate3d(0, 0px, 0) scale(1)',
          },
          '100%': {
            margin: '0',
            maxHeight: '0px',
            transform: 'translate3d(0, -50px, 0) scale(1)',
          },
        },
      },
      animation: {
        'fade-in-from-bottom': 'fade-in-from-bottom 800ms cubic-bezier(0.4, 0, 0.25, 1)',
        'fade-in': 'fade-in 600ms cubic-bezier(0.4, 0, 0.25, 1) forwards',
        'fade-out': 'fade-out 600ms cubic-bezier(0.4, 0, 0.25, 1) forwards',
        'slide-in-from-top': 'slide-in-from-top 800ms forwards',
        'slide-out-to-top': 'slide-out-to-top 800ms forwards',
      }
    },
  },
  plugins: [],
}