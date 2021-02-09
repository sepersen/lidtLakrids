module.exports = {
  purge: [{
    content: ['./public/**/*.html', './src/**/**/*.vue']
    }
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'lakrids': '3.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
