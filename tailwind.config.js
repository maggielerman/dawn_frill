module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      'md': '750px',
      'lg': '990px',
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily: {
        'heading': 'var(--font-heading-family)'
      },
      colors: {
        'frill': '#4869FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}