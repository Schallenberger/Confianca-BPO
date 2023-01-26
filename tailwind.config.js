/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage:{
        blur: 'url(/src/assets/background-blur.png)'
      },
      fontFamily:{
        sans: 'merriweather',
        kumph: 'Kumbh Sans'
      },
      colors:{
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          800: '#94B49F',
        },
        blue: {
          400: '#174d99',
          500: '#4A69FF',
          600: '#002D6D',
          700: '#01142F',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        palette:{
          primary: '#fffff',
          secondary: '#3F4E4F',
          terciary: '#A27B5C',
          quaternary: '#7EB3FF'
        }
      }
    },
  },
  plugins: [],
}
