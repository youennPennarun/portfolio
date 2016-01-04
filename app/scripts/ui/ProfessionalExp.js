"use strict";
import {Component} from "react";
import {Element} from "react-scroll"; 
import ProfessionalExpItem from "./ProfessionalExpItem";

class ProfessionalExp extends Component {
	render() {
		let {experiences} = this.props;
		return (
			<Element name="professional-exp" className="block">
				<h1 className="main">Experiences</h1>
				{
				experiences.map(
					experience => (<ProfessionalExpItem key={experience.title} {...experience} />)
				)
			}	
			</Element>

		);
	}
}

export default ProfessionalExp;