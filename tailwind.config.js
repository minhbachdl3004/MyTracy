/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'signature': ['"Dancing Script"', 'cursive', 'sans-serif'],
      },
      colors: {
        'romantic-pink': '#ff69b4',
        'soft-gold': '#ffd700',
        'night-sky': '#0a0e27',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px #ff69b4, 0 0 30px #ff69b4, 0 0 40px #ff69b4' },
          '50%': { textShadow: '0 0 30px #ff69b4, 0 0 50px #ff69b4, 0 0 70px #ff69b4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}

