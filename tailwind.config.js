/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      },
      keyframes: {
        'fade-in-bottom': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-bottom': 'fade-in-bottom 1s ease-out',
        spinSlow: 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}

