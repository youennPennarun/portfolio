import {Component} from "react";

class ProjectDetail extends Component {
	render() {
		let {active,
			closeDetails,
			cover,
			name,
			description,
			technos,
			links
		} = this.props;
		return (
			<div className={(active)? "project-detail active": "project-detail"}>
				<span className="close" onClick={closeDetails}>
					
				</span>
				<div className="name">
					{name}
				</div>
				<img src={cover}  onClick={()=>this.showDetails()}/>
				<div className="description">
					{description}
				</div>
				<br/>
				<div className="technos">
					{technos.join(", ")}
				</div>
				<div className="technos">
					{links.map(function(link) {
						return (
							<div>{link.name}: <a href={link.url}>{link.url}</a></div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default ProjectDetail;