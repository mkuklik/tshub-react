const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  stats: { errorDetails: true },
  entry: {
    Workbook: "./src/workbook/index.jsx",
  },
  output: {
    filename: "[name].bundle.js",
    // chunkFilename: '[name].[id].bundle.js',
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/",
  },
  resolve: {
    // extensions: ['.js', '.jsx'],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      Pages: path.resolve(__dirname, "src/viewer/pages"),
      Types: path.resolve(__dirname, "src/viewer/types"),
      Components: path.resolve(__dirname, "src/viewer/components"),
      actions: path.resolve(__dirname, "src/viewer/actions"),
      reducers: path.resolve(__dirname, "src/viewer/reducers"),
      utilities: path.resolve(__dirname, "src/viewer/utilities"),
    },
    fallback: {
      util: require.resolve("util/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Match .js, .jsx, .ts, and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/,
        loader: "file-loader",
      },
      {
        test: /\.less/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // {
      //   test: /\.(js|map|mjs)$/, // Match .js, .map, and .mjs files
      //   include: [
      //     path.resolve(__dirname, 'node_modules/@r-wasm/webr/dist'),
      //   ],
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: 'webr',
      //     },
      //   },
      // },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "node_modules/react/umd/react.development.js",
        },
        {
          from: "node_modules/react-dom/umd/react-dom.development.js",
        },
        {
          from: "node_modules/flexlayout-react/style/light.css",
          to: "node_modules/flexlayout-react/style/light.css",
        },
        {
          from: "src/workbook/light.css",
          to: "src/workbook/light.css",
        },
        // for webr-worker and serviceworker js files
        {
          from: "node_modules/@r-wasm/webr/dist/*.(js|map|mjs)",
          to: "webr/[name][ext]",
        },
      ],
    }),
  ],
};

// const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// // const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   entry: {
//     // TimeSeriesViewer: "./src/TimeSeriesViewerApp.js",
//     // TimeSeriesBrowser: "./src/TimeSeriesBrowserApp.js",
//     // MemberManager: "./src/MemberManager.js",
//     // ExpressionApp: "./src/ExpressionApp.js",
//     // Uploader: "./src/UploaderApp.js",
//     // GraphViewer: "./src/GraphViewerApp.js",
//     Workbook: "./src/workbook/index.jsx",
//   },
//   output: {
//     filename: "[name].bundle.js",
//     // chunkFilename: '[name].[id].bundle.js',
//     path: path.resolve(__dirname, "..", "dist"),
//     publicPath: "/",
//   },
//   resolve: {
//     // extensions: ['.js', '.jsx'],
//     extensions: [".ts", ".tsx", ".js", ".jsx"],
//     alias: {
//       Pages: path.resolve(__dirname, "src/viewer/pages"),
//       Types: path.resolve(__dirname, "src/viewer/types"),
//       Components: path.resolve(__dirname, "src/viewer/components"),
//       actions: path.resolve(__dirname, "src/viewer/actions"),
//       reducers: path.resolve(__dirname, "src/viewer/reducers"),
//       utilities: path.resolve(__dirname, "src/viewer/utilities"),
//     },
//   },
//   module: {
//     rules: [
//       // {
//       //   test: /\.jsx?$/, // Matches .js and .jsx files
//       //   exclude: /node_modules/,
//       //   // loader: 'babel-loader',
//       //   // https://github.com/lodash/babel-plugin-lodash
//       //   query: {
//       //     plugins: ['lodash'],
//       //     presets: [['@babel/env', { targets: { node: 6 } }]],
//       //   },
//       // },
//       // {
//       //   test: /\.(t|j)sx?$/,
//       //   use: { loader: "awesome-typescript-loader" },
//       //   exclude: /node_modules/,
//       // },
//       // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
//       // { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
//       {
//         test: /\.tsx?$/, // Match both .ts and .tsx files (and .jsx)
//         exclude: /node_modules/,
//         use: 'ts-loader',
//       },
//       // {
//       //   test: /\.(js|jsx)$/,
//       //   exclude: /node_modules/,
//       //   use: {
//       //     loader: 'babel-loader',
//       //     options: {
//       //       presets: ['@babel/preset-env', '@babel/preset-react']

//       //     }
//       //   }
//       // },
//       // addition - add source-map support
//       // {
//       //   enforce: "pre",
//       //   test: /\.js$/,
//       //   exclude: /node_modules/,
//       //   loader: "source-map-loader",
//       // },
//       // {
//       //   test: /\.css$/i,
//       //   use: ['style-loader', 'css-loader'],
//       // },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: "style-loader",
//           },
//           {
//             loader: "css-loader",
//           },
//         ],
//       },
//       {
//         test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/,
//         loader: "file-loader",
//       },
//       {
//         test: /\.less/,
//         use: [
//           {
//             loader: "style-loader",
//           },
//           {
//             loader: "css-loader",
//             options: {
//               sourceMap: true,
//             },
//           },
//           {
//             loader: "less-loader",
//             options: {
//               sourceMap: true,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   externals: {
//     react: "React",
//     "react-dom": "ReactDOM",
//   },
//   plugins: [
//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: "node_modules/react/umd/react.development.js",
//         },
//         {
//           from: "node_modules/react-dom/umd/react-dom.development.js",
//         },
//         {
//           from: "node_modules/flexlayout-react/style/light.css",
//           to: "node_modules/flexlayout-react/style/light.css",
//         },
//         {
//           from: "src/workbook/light.css",
//           to: "src/workbook/light.css",
//         },
//         {
//           from: "node_modules/@r-wasm/webr/dist/*",
//           to: "[name].[ext]",
//         },
//       ],
//     }),
//     // new CleanWebpackPlugin({
//     //   cleanOnceBeforeBuildPatterns: ['**/*'],
//     // }),
//   ],
//   // plugins: [
//   //  // new webpack.optimize.MinChunkSizePlugin({
//   //  //  minChunkSize: 1
//   //   // }),
//   //   //
//   //   new webpack.DefinePlugin({
//   //     "process.env": {
//   //        NODE_ENV: (env.production) ?
//   //          JSON.stringify("production") :
//   //          JSON.stringify("development")
//   //      }
//   //   }),
//   //   //https://github.com/webpack-contrib/webpack-bundle-analyzer
//   //   // new BundleAnalyzerPlugin(),
//   //   new CleanWebpackPlugin({
//   //     cleanOnceBeforeBuildPatterns: ['**/*', '!static/**/*', '!static'],
//   //   }),
//   //  //  Auto open the demo
//   //  // new OpenBrowserPlugin({ url: 'http://localhost:9000' })
//   // ],
//   // devServer: {
//   //   host: 'localhost',
//   //   // contentBase: path.join(__dirname, 'dist'),
//   //   // compress: true,
//   //   port: 9000,
//   //   // CORS
//   //   historyApiFallback: true,
//   //   watchOptions: { aggregateTimeout: 300, poll: 1000 },
//   //   headers: {
//   //     "Access-Control-Allow-Origin": "*",
//   //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//   //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
//   //   }
//   // }
// };
