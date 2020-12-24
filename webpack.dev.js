const webpack = require('webpack');
const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs'],
    modules: [path.resolve(__dirname), 'node_modules', 'app'],
  },
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
