"use strict";
import React, {Component} from "react";
import Translate from "../Translate";
import Logo from "./Logo";

class Header extends Component {
  render() {
    let {title} = this.props;
    return (
        <div className="header">
          {/*<img className="cover" src={cover} />*/}
          <Logo />
          <div className="description">
            <h1>{title}</h1>
            <hr/>
            <Translate component="h2" content="header.subtitle" />
          </div>
        </div>
      );
  }
}


module.exports = Header;

