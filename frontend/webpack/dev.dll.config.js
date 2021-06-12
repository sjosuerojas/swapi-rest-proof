const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[fullhash].dll.js',
    library: '[name]',
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()],
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '../dist/[name]-manifest.json'),
    }),
  ],
};
