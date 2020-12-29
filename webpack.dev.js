const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app'],
  },
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/app/app.tsx',
    ]
  },
  output: {
    path: path.join(__dirname, './dist/public'),
    publicPath: '/public/',
    filename: 'js/[name].js',
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ManifestPlugin({
      filename: '../manifest.json'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
