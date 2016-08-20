const path = require('path');

module.exports = {
  entry: {
    client: './client/main.jsx'
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  watchOptions: {
    poll: true
  }
};