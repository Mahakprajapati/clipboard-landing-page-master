/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs':'426px',
      'media540':'540px',
      'media446':'446px',
      'media581':'581px'
    },
    fontFamily:{
      'Bai':['Bai Jamjuree','sans-serif']
    },
    colors:{
      'gray':'rgb(159, 171, 178)',
      'cyan':'rgb(38, 186, 164)',
      'white':'#ffff'
    }
  },
  plugins: [],
}

