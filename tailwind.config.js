const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 3s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        }
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255, 255, 255, 0.3)',
      }
    }
  },
  plugins: [],
});