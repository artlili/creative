module.exports = {
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development'
      ? 'inline-source-map'
      : false,
  },
  css: {
    sourceMap: process.env.NODE_ENV === 'development'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        './src/assets/sass/utils/_vars.sass',
        './src/assets/sass/utils/_mixins.sass'
      ]
    }
  }
}
