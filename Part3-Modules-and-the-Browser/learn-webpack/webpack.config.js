const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  watch: false,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 10000,
    poll: 1000
  }, 
  // this configuration makes it so that you constantly watch
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};