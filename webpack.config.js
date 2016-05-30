var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    'bootstrap-loader',
    './app/'
  ],
  devtool: 'source-map',
  output: { 
    path: __dirname, 
    publicPath: '/',
    filename: 'bundle.js' 
  },
  resolve: {
    alias: {
      config: path.join(__dirname, 'config', process.env.NODE_ENV)
    }
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html" },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader' },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app/stylesheets/")]
  }
};
