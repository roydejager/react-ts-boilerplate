import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

const wrapper = document.getElementById('app');

ReactDOM.hydrate(<App compiler="typescript" framework="react" />, wrapper);
