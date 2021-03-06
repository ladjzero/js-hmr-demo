const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  }
};