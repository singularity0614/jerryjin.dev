/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
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
        sans: ['proxima-nova', 'sans-serif'],
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
            maxHeight: '400px',
            transform: 'translate3d(0, 0, 0) scale(1)',
          },
        },
        'slide-out-to-top': {
          '0%': {
            margin: '0.5rem auto',
            maxHeight: '400px',
            transform: 'translate3d(0, 0px, 0) scale(1)',
          },
          '100%': {
            margin: '0',
            maxHeight: '0px',
            transform: 'translate3d(0, -50px, 0) scale(1)',
          },
        },
        'gradient-anim': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          },
        },
        'shine': {
          '0%, 100%': {
            'background-size':'300% 300%',
            'background-position': 'right center'
          },
          '50%': {
            'background-size':'300% 300%',
            'background-position': 'left center'
          },
        },
      },
      animation: {
        'fade-in-from-bottom': 'fade-in-from-bottom 800ms cubic-bezier(0.4, 0, 0.25, 1)',
        'fade-in': 'fade-in 600ms cubic-bezier(0.4, 0, 0.25, 1) forwards',
        'fade-out': 'fade-out 600ms cubic-bezier(0.4, 0, 0.25, 1) forwards',
        'slide-in-from-top': 'slide-in-from-top 800ms forwards',
        'slide-out-to-top': 'slide-out-to-top 800ms forwards',
        'gradient-anim': 'gradient-anim 10s ease infinite',
        'shine': 'shine 8s infinite',
      }
    },
  },
  plugins: [],
}