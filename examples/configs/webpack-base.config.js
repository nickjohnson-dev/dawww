/* eslint-disable global-require */
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const babelConfig = require('../../package.json').babel;

module.exports = {
  entry: {
    app: path.join(__dirname, '../index.js'),
    vendor: [
      'babel-polyfill',
      'lodash',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            quiet: true,
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CleanWebpackPlugin([
      path.join(__dirname, '../dist'),
    ]),
    new HtmlWebpackPlugin({
      baseHref: '/',
      inject: false,
      title: 'dawww Testing',
      template: require('html-webpack-template'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ],
};
