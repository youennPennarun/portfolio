"use strict";
import {Component} from "react";
import ProjectDetail from "./ProjectDetail";

class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		};
	}
	showDetails() {
		this.setState({showDetails: true});
		document.querySelector("body").style.overflow = "hidden";
	}
	closeDetails() {
		this.setState({showDetails: false});
		document.querySelector("body").style.overflow = "auto";
	}
	render() {
		let {cover} = this.props;
		let {showDetails} = this.state;
		return (
			<div className="block no-padding">
				<img className="grid-item-cover clickable" src={cover}  onClick={()=>this.showDetails()}/>

				<ProjectDetail {...this.props} active={showDetails} closeDetails={() => {this.closeDetails();}}/>
			</div>
		);
	}
}

export default ProjectItem;

