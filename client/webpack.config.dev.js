const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
