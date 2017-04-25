const path = require('path');

module.exports = {
  devtool: '#source-map',
  context: __dirname,
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
};