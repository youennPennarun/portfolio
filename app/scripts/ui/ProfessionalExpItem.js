"use strict";
import {Component} from "react";
import Translate from "../Translate";

class ProfessionalExpItem extends Component {
	renderTechno(tech) {
		return (
			<div key={tech.name} className="item">
				<img src={tech.img} />
				<p>{tech.name}</p>
			</div>
		);
	}
	render() {
		let {title, description, technos = [], location, start, end} = this.props;
		return (
			<div className="experience sub-block level-2">
				<h2>{title}</h2>
				<div className="info" >
		        	<Translate component="p" content="experiences.info" location={location} start={start} end={end}/>
		        </div>
				<p>
					{description}
				</p>
				<div className="technos">
					{
						technos.map(item => this.renderTechno(item))
					}
				</div>
			</div>
		);
	}

}

export default ProfessionalExpItem;