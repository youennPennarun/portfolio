"use strict";

import {Component} from "react";
import {Element} from "react-scroll";
import StudyItem from "./StudyItem";
import Translate from "../Translate";

class Studies extends Component {
  render() {
    let {studies} = this.props;
    return (
      <Element name="education" className="block">
        <Translate component="h1" className="main" content="studies.title"/>
        {
          studies.map(
            (study, key) => (<StudyItem key={key} { ...study } />)
          )
        }
      </Element>
    );
  }
}


export default Studies;

