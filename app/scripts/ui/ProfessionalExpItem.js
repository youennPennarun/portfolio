"use strict";
import {Component} from "react";
import Translate from "../Translate";

class ProfessionalExpItem extends Component {
	render() {
		let {title, description, location, start, end} = this.props;
		return (
			<div id="experiences" className="sub-block level-2">
				<h1>{title}</h1>
				<div className="info" >
		        	<Translate component="p" content="experiences.info" location={location} start={start} end={end}/>
		        </div>
				<p>
					{description}
				</p>
			</div>
		);
	}

}

export default ProfessionalExpItem;