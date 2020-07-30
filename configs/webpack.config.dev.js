const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      template: `./src/index.html`,
      filename: 'index.html',
    }),
  ],
  output: {
    filename: '[name].js',
  },
  devServer: {
    port: 4200,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ]
  }
}
