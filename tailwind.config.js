/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        dmsans: ['DM Sans'],
      },
      colors: {
        hero: '#f0f2ff',
      },
      screens: {
        mobileM: '375px',
        mobileL: '425px',
        laptopL: '1440px'
      }
    },
  },
  plugins: [],
}

