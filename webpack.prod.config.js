var webpack = require('webpack')
const path = require('path');
var config = require('./webpack.base.config')

config.plugins = (config.plugins || []).concat([
  // this allows uglify to strip all warnings.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  // This minifies not only JavaScript, but also
  // the templates (with html-minifier) and CSS (with cssnano)!
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
])

module.exports = config
