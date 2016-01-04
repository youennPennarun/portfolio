"use strict";
import {Component} from "react";
import {Element} from "react-scroll"; 
import ProjectItem from "./ProjectItem";

class Projects extends Component {
	render() {
		let {projects} = this.props;
		return (
			<Element name="projects" id="projects">
				<h1>Projects</h1>
				<hr/>
				<div className="grid">
					{
						projects.map(
							project => (<ProjectItem key={project.name} {...project} />)
						)
					}
				</div>
			</Element>
		);
	}
}

export default Projects;