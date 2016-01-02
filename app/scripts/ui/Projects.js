"use strict";
import {Component} from "react";
import {Element} from 'react-scroll'; 
import ProjectItem from "./ProjectItem"

class Projects extends Component {
	render() {
		let {projects} = this.props;
		return (
			<Element name="projects" className="grid">
			{
				projects.map(
					project => (<ProjectItem key={project.name} {...project} />)
				)
			}	
			</Element>

		)
	}
}

export default Projects