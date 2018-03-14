var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      // use babel-loader for js files
      {test: /\.js$/, loader: 'babel-loader'},
      // use vue-loader for .vue files
      {test: /\.vue$/, loader: 'vue-loader'},
      // use css-loader for .css files
      {test: /\.css/, loader: 'css-loader'},
      // use url-loader for .(png|jpe?g|gif|svg) files
      {test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader'}
    ]
  },
  // default for pretty much every project
  context: __dirname,
  // specify your entry/main file
  output: {
    // specify your output directory...
    path: path.resolve(__dirname, './dist'),
    // and filename
    filename: 'vue-preview.min.js',
    library: 'VuePreview',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
