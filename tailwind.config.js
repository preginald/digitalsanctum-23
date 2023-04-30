/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'deep-blue': {
          light: '#5A6D9C',
          dark: '#0A1A33',
        },
        'electric-blue': {
          light: '#6CB4E4',
          dark: '#065A82',
        },
        'vibrant-red': {
          light: '#EF4A53',
          dark: '#B91D29',
        },
        'silver': {
          light: '#D0D0D0',
          dark: '#898989',
        },
        'charcoal': {
          light: '#6A6A6A',
          dark: '#1E1E1E',
        },
        'text': {
          light: '#FFFFFF80',
          dark: '#00000090',
        },
      }),
      textColor: theme => ({
        ...theme('colors'),
        'deep-blue': {
          light: '#3B4A75',
          dark: '#0A1A33',
        },
        'electric-blue': {
          light: '#3C9DD3',
          dark: '#09719A',
        },
        'vibrant-red': {
          light: '#EF4A53',
          dark: '#B91D29',
        },
        'silver': {
          light: '#D0D0D0',
          dark: '#898989',
        },
        'charcoal': {
          light: '#6A6A6A',
          dark: '#1E1E1E',
        },
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'deep-blue': {
          light: '#3B4A75',
          dark: '#0A1A33',
        },
        'electric-blue': {
          light: '#3C9DD3',
          dark: '#09719A',
        },
        'vibrant-red': {
          light: '#EF4A53',
          dark: '#B91D29',
        },
        'silver': {
          light: '#D0D0D0',
          dark: '#898989',
        },
        'charcoal': {
          light: '#6A6A6A',
          dark: '#1E1E1E',
        },
      }),
      ringColor: theme => ({
        ...theme('colors'),
        'deep-blue': {
          light: '#3B4A75',
          dark: '#0A1A33',
        },
        'electric-blue': {
          light: '#3C9DD3',
          dark: '#09719A',
        },
        'vibrant-red': {
          light: '#EF4A53',
          dark: '#B91D29',
        },
        'silver': {
          light: '#D0D0D0',
          dark: '#898989',
        },
        'charcoal': {
          light: '#6A6A6A',
          dark: '#1E1E1E',
        },
      }),
    },
  },
  plugins: [],
}

