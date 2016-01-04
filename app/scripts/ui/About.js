import React from "react";
import {Element} from "react-scroll";

class About extends React.Component {
	render() {
		let {about} = this.props;
		return (
			<Element name="about" id="about">
				<h1>{about.title}</h1>
				<hr/>
				<p dangerouslySetInnerHTML={{__html: about.content}}>
				</p>
				
			</Element>
		);
	}
}

export default About;