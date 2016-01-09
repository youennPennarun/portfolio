
var React = window.React = require("react"), //jshint ignore:line
    ReactDOM = require("react-dom");
import App from "./App";

if (typeof window !== "undefined") {
  window.onload = function() {
    "use strict";
    ReactDOM.render(<App />, document.getElementById("app"));
  };
}

