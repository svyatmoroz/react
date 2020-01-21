const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({ 
        filename: 'index.html',
        template: 'src/index.html'
      }),
      new CopyPlugin([
        { from: './src/img', to: './src/img' },
      ])
    ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
        ],
      },
      { 
        test: /\.js$/,
        loader: "babel-loader" 
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
  }
};