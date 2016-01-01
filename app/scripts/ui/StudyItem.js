'use strict';
var React = require('react');

class StudyItem extends React.Component {
  render() {
    let {title, description} = this.props;
    return (
      <div className="sub-block level-2">
          <h1>{title}</h1>
          <p>
            {description}
          </p>
        </div>
      )
  }
}


export default StudyItem;

