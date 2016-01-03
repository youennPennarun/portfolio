'use strict';
var React = require('react');
import Translate from "../Translate";

class StudyItem extends React.Component {
  render() {
    let {title, description, location, start, end, content} = this.props;
    if (!content) content = [];
    return (
      <div className="sub-block level-2 study">
          <h1>{title}</h1>
          <div className="info" >
            <Translate component="p" content="studies.info" location={location} start={start} end={end}/>
          </div>
          
            {
              (description)? (
                <p>{description}<br/></p>
              ) : ""
            }
            
            {
              content.map((item, key) => {
                return (
                  <p key={key} className="item">
                    {"→ " + item}
                  </p>
                )
              })
            }
        </div>
      )
  }
}


export default StudyItem;

