"use strict";
import {Component} from "react";

class ProfessionalExpItem extends Component {
	render() {
		let {title, description} = this.props;
		return (
			<div className="sub-block level-2">
				<h1>{title}</h1>
				<p>
					{description}
				</p>
			</div>
		)
	}

}

export default ProfessionalExpItem;