var path = require('path');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/main.js'),
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: "Init",
    libraryTarget: "var"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin()
  ]
};
