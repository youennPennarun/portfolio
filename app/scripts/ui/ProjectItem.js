"use strict";
import {Component} from "react";
import ProjectDetail from "./ProjectDetail";

class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		}
	}
	showDetails() {
		this.setState({showDetails: true});
	}
	closeDetails() {
		this.setState({showDetails: false});
	}
	render() {
		let {cover} = this.props;
		let {showDetails} = this.state;
		console.log("show?", this.state.showDetails);
		return (
			<div className="block no-padding">
				<img className="grid-item-cover clickable" src={cover}  onClick={()=>this.showDetails()}/>

				<ProjectDetail {...this.props} active={this.state.showDetails} closeDetails={() => {this.closeDetails()}}/>
			</div>
		)
	}
}

export default ProjectItem;

