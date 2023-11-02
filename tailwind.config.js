/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        baseColor: 'rgb(0, 12, 117)',
        secColor: 'rgb(219, 0, 255)',
      },
      fontFamily: {
        sans: ['Varela Round', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Monserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
        
      },
      keyframes: {
        movingBg: {
          '0%': { 'background-position': '50% 0' },
          '100%': { 'background-position': '-150% 0' },
        },
      },
      animation: {
        'moving-bg': 'movingBg 1s linear infinite',
      },
    },
  },
  plugins: [],
}

// tailwind.config.js

// module.exports = {
//   // Other Tailwind CSS configuration options

//   extend: {
//     keyframes: {
//       movingBg: {
//         '0%': { 'background-position': '50% 0' },
//         '100%': { 'background-position': '-150% 0' },
//       },
//     },
//     animation: {
//       'moving-bg': 'movingBg 1s linear infinite',
//     },
//   },
// };
