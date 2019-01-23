import App from './app'
import * as ReactDOM from "react-dom";
import * as React from "react";

const wrapper = document.getElementById("app");

ReactDOM.render(<App compiler="typescript" framework="react" />, wrapper);
