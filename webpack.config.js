var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'bootstrap-loader',
    './app/'
  ],
  devtool: 'source-map',
  output: { 
    path: __dirname, 
    publicPath: '/',
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "svg-inline" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app/stylesheets/")]
  }
};
