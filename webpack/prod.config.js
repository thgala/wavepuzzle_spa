const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const YAML = require('yamljs');
const APP_CONFIG = YAML.load(__dirname + '/../config.yml').production;

module.exports = {
  devtool: 'source-map',

  entry: ['./src/index'],

  output: {
    publicPath: '/'
  },

  module: {
    loaders: [{
      test: /\.(scss|sass|css)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css!postcss-loader!sass'),
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
      APP_CONFIG: JSON.stringify(APP_CONFIG)
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: false,
      APP_CONFIG: APP_CONFIG
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
