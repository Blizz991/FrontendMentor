/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        //Excuse the color names, I'm just following the style-guide.
        'moderate-blue': 'hsl(238, 40%, 52%)',
        'soft-red': 'hsl(358, 79%, 66%)',
        'light-grayish-blue': 'hsl(239, 57%, 85%)',
        'pale-red': 'hsl(357, 100%, 86%)',
        'dark-blue': 'hsl(212, 24%, 26%)',
        'grayish-blue': 'hsl(211, 10%, 45%)',
        'light-gray': 'hsl(223, 19%, 93%)',
        'very-light-gray': 'hsl(228, 33%, 97%)',
      },
      fontFamily: {
        'sans': ['Rubik',...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

