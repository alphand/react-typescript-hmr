var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static'
  },
  devtool: 'inline-source-map',
  module: {
    rules:[
      {
        test: /\.tsx?$/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre',
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
}