import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from '../app';
import html from './html';

const port = 3000;
const server = express();
const sheet = new ServerStyleSheet();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('../../webpack.server');
  const compiler = webpack(config);

  server.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.path,
    stats: {
      colors: true,
      chunks: false,
    },
  }));

  server.use(require('webpack-hot-middleware')(compiler));
}

server.use(express.static('dist'));

server.get('/', (req, res) => {
  const body = renderToString(
    sheet.collectStyles(<App />)
  );

  const styles = sheet.getStyleTags();

  res.send(html({ body, styles }));

});

server.listen(port, () => console.log(`Listening on port ${port}`));
