const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'client', 'entry.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  watchOptions: {
    poll: 3000
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
};