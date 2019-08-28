const path = require('path');

const config = {
  entry: './src/test.js',
  output: {
    filename: './my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;