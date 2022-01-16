module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active']
    }
  },
  plugins: []
  /*  corePlugins: {
    preflight: false
  }*/
}
