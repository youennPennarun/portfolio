"use strict";
import {Component} from "react";
import ProfessionalExpItem from "./ProfessionalExpItem"

class ProfessionalExp extends Component {
	render() {
		let {experiences} = this.props;
		return (
			<div className="block">
				<h1 className="main">Experiences</h1>
				{
				experiences.map(
					experience => (<ProfessionalExpItem key={experience.title} {...experience} />)
				)
			}	
			</div>

		)
	}
}

export default ProfessionalExp