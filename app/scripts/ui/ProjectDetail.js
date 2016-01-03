import {Component} from "react";
import Slider from '../Slider';

const sliderSettings = {
	dots: true,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

class ProjectDetail extends Component {
	render() {
		let {active,
			closeDetails,
			cover,
			slides,
			name,
			description,
			technos,
			links,
			ignoreCover
		} = this.props;
		slides = slides || [];
		slides.push(cover);
		slides.push(cover);
		slides.push(cover);

		slides.push(cover);

		if (!ignoreCover && slides.indexOf(cover) === -1) 
			slides.push(cover);
		return (
			<div className={(!active)? "project-detail active": "project-detail"}>
				<span className="close" onClick={closeDetails}>
					
				</span>
				<h1 className="name">
					{name}
				</h1>
				<hr className="underline" />
				<div className="project-slider-container">
		    		<Slider {...sliderSettings}>
		    			{
		    				slides.map(function(slide, key) {
		    					return(
		        					<div key={key}><img src={slide} style={{maxWidth: "100%"}} /></div>
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
					<h2>Used technologies</h2>
					<strong>{technos.join(", ")}</strong>
				</div>
				<div className="links">
					{links.map(function(link, key) {
						return (
							<div key={key}><strong>{link.name}: </strong><a href={link.url}>{link.url}</a></div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default ProjectDetail;