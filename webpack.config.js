const path = require('path');
const merge = require('webpack-merge');
const prodConfig = require('./configs/webpack.config.prod');
const devConfig = require('./configs/webpack.config.dev');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');

const configs = { production: prodConfig, development: devConfig };

const ENV = process.env.NODE_ENV;
const APP_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');

const baseConfig = {
  entry: APP_DIR + '/index.tsx',
  output: {
    path: DIST_DIR,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CheckerPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    plugins: [
      new TsConfigPathsPlugin(),
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /\.spec.tsx?$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread'
              ]
            }
          },
          {
            loader: 'ts-loader',
          },
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      }
    ]
  }
}

module.exports = merge(baseConfig, configs[ENV]);
