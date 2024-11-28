const { merge } = require("webpack-merge");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    // new webpack.optimize.MinChunkSizePlugin({
    // minChunkSize: 1
    // }),
    //
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!static/**/*", "!static"],
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  // optimization: {
  //   minimizer: [new UglifyJsPlugin({ sourceMap: true })],
  // },
});
