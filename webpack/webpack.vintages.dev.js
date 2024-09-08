const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = (env) => merge.smartStrategy(
  {
    entry: 'replace', // or 'replace'
    'module.rules': 'prepend',
  },
)(common, {
  entry: {
    Vintages: './src/VintagesApp.js',
  },
  // context: __dirname,
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    // new webpack.optimize.MinChunkSizePlugin({
    // minChunkSize: 1
    // }),
    //
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    // https://github.com/webpack-contrib/webpack-bundle-analyzer
    // new BundleAnalyzerPlugin(),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['**/*', '!static/**/*', '!static'],
    // }),
    // Auto open the demo
    // new OpenBrowserPlugin({ url: 'http://localhost:9000' })
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join('webpack', env.index),
    }),
  ],
  devServer: {
    host: 'localhost',
    serveIndex: true,
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // stats: 'minimal',
    port: 9007,
    // CORS
    // historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: path.join('webpack', env.index) },
        { from: /^\/layouts\/$/, to: path.join('webpack', env.index) },
      ],
    },
  },
});
