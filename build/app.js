var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!',
  console.log(document.getElementById('app'))
), document.getElementById('app'));