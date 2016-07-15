"use strict";
import React, {Component} from "react";
import {Element} from "react-scroll"; 
import ProjectItem from "./ProjectItem";
import Translate from "../Translate";

class Projects extends Component {
	render() {
		let {projects} = this.props;
		return (
			<Element name="projects" id="projects">
				<Translate component="h1" content="projects.title" />
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