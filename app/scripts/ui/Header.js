'use strict';

var React = require('react');

class Header extends React.Component {
  render() {
    let {cover, title, subtitle} = this.props;
    return (
      <div className="header">
        <img className="cover" src={cover} />
        <div className="description">
          <h1>{title}</h1>
          <hr/>
          <h2>{subtitle}</h2>
        </div>
      </div>
      )
  }
}


module.exports = Header;

