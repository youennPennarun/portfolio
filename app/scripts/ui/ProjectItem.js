"use strict";
import {Component} from "react";

class ProjectItem extends Component {
	render() {
		let {cover} = this.props;
		return (
			<div className="block no-padding clickable">
				<img src={cover} />
			</div>
		)
	}
}

export default ProjectItem;

