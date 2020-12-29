import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
const ReactHotLoader = require("react-hot-loader").AppContainer
  
const wrapper = document.getElementById('app');

ReactDOM.hydrate(
  <ReactHotLoader>
    <App compiler="typescript" framework="react" />
  </ReactHotLoader>,
  wrapper
);
console.log(module, 'wefljkewmnf')
if ((module as any).hot) {
  (module as any).hot.accept('./app/app', () => {
    console.log(module)
    const { App: NewApp } = require('./app');
    ReactDOM.hydrate(
      <ReactHotLoader>
        <NewApp />
      </ReactHotLoader>,
      wrapper
    )
  })
}