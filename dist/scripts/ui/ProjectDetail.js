import React, {Component} from "react";
import Slider from "../Slider";
import Translate from "../Translate";

const sliderSettings = {
	dots: true,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

class ProjectDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.onKeyDown = (e) => {
			let {closeDetails} = this.props;
		    if(e.keyCode === 27) {
		        closeDetails();
		    }
		}
	}
	componentDidMount() {
		window.addEventListener("keydown", this.onKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.onKeyDown);
	}
	render() {
		let {active,
			closeDetails,
			cover,
			images,
			name,
			description,
			technos,
			links,
			ignoreCover
		} = this.props;
		images = images || [];

		if (!ignoreCover && images.indexOf(cover) === -1) 
			images.push(cover);
		return (
			<div className={(active)? "project-detail active": "project-detail"}>
				<div className="close-container" onClick={closeDetails}>
					<span className="close">
					</span>
				</div>
				<h1 className="name">
					{name}
				</h1>
				<hr className="underline" />
				<div className="project-slider-container">
		    		<Slider {...sliderSettings}>
		    			{
		    				images.map(function(image, key) {
		    					return(
		        					<div key={key}><img src={image} style={{maxWidth: "100%"}} /></div>
		        				);
		    				})
		    			}
		        	</Slider>
	        	</div>
				<div className="description">
					{description}
				</div>
				<hr/>
				<br/>
				<div className="technos">
					<Translate component="h2" content="projects.usedTech" />
					<strong>{technos.join(", ")}</strong>
				</div>
				<div className="links">
					{links.map(function(link, key) {
						return (
							<div key={key}><strong>{link.name}: </strong><a href={link.url}>{link.url}</a></div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ProjectDetail;