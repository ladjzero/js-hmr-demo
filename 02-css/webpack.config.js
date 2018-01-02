const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "css-loader" },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  }
};