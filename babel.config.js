module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'native-ui',
        libraryDirectory: 'es',
        style: 'css'
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
