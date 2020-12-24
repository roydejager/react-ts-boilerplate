const path = require('path');
const nodeExternals = require('webpack-node-externals');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

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
    path: path.join(__dirname, '/dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: '/node_modules',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      },
    ],

  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};
