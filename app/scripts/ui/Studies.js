'use strict';

var React = require('react');
import {Element} from 'react-scroll';
import StudyItem from "./StudyItem";

class Studies extends React.Component {
  render() {
    let {studies} = this.props;
    return (
      <Element name="education" className="block">
        <h1 className="main">Etudes</h1>
        {
          studies.map(
            study => (<StudyItem key={study.title} { ...study } />)
          )
        }
      </Element>
      )
  }
}


export default Studies;

