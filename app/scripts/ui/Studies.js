'use strict';

var React = require('react');
import StudyItem from "./StudyItem";

class Studies extends React.Component {
  render() {
    let {studies} = this.props;
    return (
      <div className="block">
        <h1 className="main">Etudes</h1>
        {
          studies.map(
            study => (<StudyItem key={study.title} { ...study } />)
          )
        }
      </div>
      )
  }
}


export default Studies;

