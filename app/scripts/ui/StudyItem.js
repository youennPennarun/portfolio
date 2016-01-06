"use strict";
import {Component} from "react";
import Translate from "../Translate";

class StudyItem extends Component {
  render() {
    let {title, description, location, start, end, content} = this.props;
    if (!content) content = [];
    return (
      <div className="sub-block level-2 study">
          <h2>{title}</h2>
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
                );
              })
            }
        </div>
      );
  }
}


export default StudyItem;

