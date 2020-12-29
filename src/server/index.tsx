import express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Chalk from 'chalk';
import path from 'path';
import App from '../app/app';
import Html from './html';

const port = 3000;
const server = express();
const sheet = new ServerStyleSheet();

const webpack = require('webpack');
const config = require('../../webpack.server');
const compiler = webpack(config);

server.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.path,
  serverSideRender: true,
}));

server.use(require('webpack-hot-middleware')(compiler));

server.use('/public', express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
  res.send(renderHtml());
});

server.listen(port, () => console.info(
  Chalk.black.bgGreen(`\n\nListening on port ${port}\n\n`)
));

const renderHtml = () => {
  const manifest = require('../../dist/public/manifest.json');

  const body = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <App />
    </StyleSheetManager>
  );

  const styles = sheet.getStyleTags();

  const html = renderToString(
    <Html body={body} styles={styles} manifest={manifest} />
  )

  return `<!DOCTYPE html> ${html}`;
}