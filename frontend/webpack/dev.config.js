const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:4005/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 4005,
    hot: true,
    overlay: { warnings: true, errors: true },
    watchContentBase: true,
    inline: true,
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.png'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[fullhash].css',
    }),
    new Dotenv({
      path: path.resolve(__dirname, '../.env.development'),
    }),
  ],
}
