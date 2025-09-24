/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0f0c29',
        'secondary': '#302b63',
        'tertiary': '#24243e',
      },
      animation: {
        'gradient': 'gradient 3s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
    fontFamily: {
      rubix: ["Rubik", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      sans: ["Poppins", "system-ui", "sans-serif"],
    }
  },
  plugins: [],
}

