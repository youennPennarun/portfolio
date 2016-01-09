var path = require('path');
var webpack = require("webpack");

var config = {
  entry: [
   'webpack-dev-server/client?http://127.0.0.1:8080/',
   'webpack/hot/only-dev-server',
   path.resolve(__dirname, 'app/scripts/App.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {test: /\.json$/, loaders: ["json"]}
    ],
    postLoaders: [
        {test: /\.js$/, loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"], exclude: /node_modules/}
    ]
  },
  plugins: [
        new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ],
};

module.exports = config;