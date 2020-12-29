const path = require('path');
const nodeExternals = require('webpack-node-externals');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  mode: 'development',
  externals: [nodeExternals()],
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.json'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": false,
      "buffer": false,
      "url": false,
      "vm": false,
      "os": false,
      "assert": false,
    }
  },
  entry: { 
    app: ['./src/server/index.tsx'],
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/public/',
    filename: 'server.js',
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      },
    ],
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  }
};
