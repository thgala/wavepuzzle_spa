const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

require('babel-polyfill').default;

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: [
    PATHS.app,
  ],

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', PATHS.app],
  },

  module: {
    loaders: [
      {  
        test: /\.(woff|woff2|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?name=assets/[hash].[ext]&limit=1024',
      }, {
        test: /\.(jpg|png|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=assets/[name].[ext]',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      }
    ],
  },

  postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
      postcssImport({
        addDependencyTo: webpack,
      }),
    ];
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(production, common);
}
