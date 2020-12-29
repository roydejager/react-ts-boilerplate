const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.tsx',
  externals: [nodeExternals()],
  target: 'node',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.cjs'],
    modules: [path.resolve(__dirname), 'node_modules', 'app'],
  },
  output: {
    path: path.join(__dirname, './dist/public'),
    filename: '../server.js',
    publicPath: '/public/',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
    ],
  },
  // resolve: {
  //   fallback: {
  //     path: require.resolve('path-browserify'),
  //   }
  // },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};
