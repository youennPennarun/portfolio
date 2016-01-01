"use strict";
import {Component} from "react";
import ProjectItem from "./ProjectItem"

class Projects extends Component {
	render() {
		let {projects} = this.props;
		return (
			<div className="grid">
			{
				projects.map(
					project => (<ProjectItem key={project.name} {...project} />)
				)
			}	
			</div>

		)
	}
}

export default Projects