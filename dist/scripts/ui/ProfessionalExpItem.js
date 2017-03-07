"use strict";
import React, {Component} from "react";
import Translate from "../Translate";

class ProfessionalExpItem extends Component {
	_renderTechno(tech) {
		return (
			<div key={tech.name} className="item">
				<img src={tech.img} />
				<p>{tech.name}</p>
			</div>
		);
	}
	_renderImage(image, key) {
		return (
			<div key={key} className="imageContainer" >
				<img src={image} />
			</div>
		)
	}
	render() {
		let {title, description, images = [], technos = [], location, start, end} = this.props;
		return (
			<div className="experience sub-block level-2">
				<h2>{title}</h2>
				<div className="info" >
		        	<Translate component="p" isHTML={true} content="experiences.info" location={location} start={start} end={end}/>
		        </div>
				<p dangerouslySetInnerHTML={{__html: description}}>
				</p>
				<div className="images">
					{
						images.map((image, key) => this._renderImage(image, key))
					}
				</div>
				<div className="technos">
					{
						technos.map(item => this._renderTechno(item))
					}
				</div>
			</div>
		);
	}

}

export default ProfessionalExpItem;