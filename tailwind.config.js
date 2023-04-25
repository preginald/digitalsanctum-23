/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'deep-blue': '#1C2D52',
        'electric-blue': '#0F94D2',
        'vibrant-red': '#EB1F33',
        'silver': '#C0C0C0',
        'charcoal': '#404040',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'deep-blue': '#1C2D52',
        'electric-blue': '#0F94D2',
        'vibrant-red': '#EB1F33',
        'silver': '#C0C0C0',
        'charcoal': '#404040',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'deep-blue': '#1C2D52',
        'electric-blue': '#0F94D2',
        'vibrant-red': '#EB1F33',
        'silver': '#C0C0C0',
        'charcoal': '#404040',
      }),
    },
  },
  plugins: [],
}

