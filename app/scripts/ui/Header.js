"use strict";
import React, {Component} from "react";
import Translate from "../Translate";
import Logo from "./Logo";

if (typeof Image !== 'undefined') {
  var my_image = new Image();
  my_image.src = 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-breed-landing-hero.ashx';
}

function getPrintableHeader(props) {
    let {title} = props;
  return (
        <div className="header">
          <img className="my-pic" src="https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-breed-landing-hero.ashx" /> 
          <div className="presentation">
            <h1>{title}</h1>
            <h2>subtitle</h2>
          </div>
          <div className="contact">
            <p>21 allée des mimosas, 29800 Landerneau</p>
            <p>youenn.pennarun@gmail.com</p>
            <p>06.04.08.02.58</p>
            <p>https://github.com/youennPennarun</p>
            <p>http://youenn.pennarun.com</p>
          </div>
        </div>
  )
}

export default function Header(props) {
    let {title, isMediaPrint} = props;
    if (isMediaPrint) return getPrintableHeader(props);
    return (
        <div className="header">
          <Logo />
          <div className="description">
            <h1>{title}</h1>
            <hr/>
            <Translate component="h2" content="header.subtitle" />
          </div>
        </div>
      );
  }

