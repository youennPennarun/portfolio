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
            {/*<p className="location">{location}</p>
            <p className="dates"> - from {start} to {end}</p>*/}
            <p>
              <Translate component="p" content="studies.info" location={location} start={start} end={end}/>
            </p>
          </div>
          
            {
              (description)? (
                <p>{description}<br/></p>
              ) : ""
            }
            
            {
              content.map(item => {
                return (
                  <p className="item">
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

