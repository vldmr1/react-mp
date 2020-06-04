const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      template: `./src/index.html`,
      filename: 'index.[hash].html',
      minify: {
        collapseWhitespace: true,
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../bundle-report/report.html',
      openAnalyzer: false,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: '[name].[hash].js',
  },
}
