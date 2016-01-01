import React from "react";

class About extends React.Component {
	render() {
		let {about} = this.props;
		return (
			<div className="about">
				<h1>{about.title}</h1>
				<hr/>
				<p dangerouslySetInnerHTML={{__html: about.content}}>
				</p>
			</div>
		);
	}
}

export default About;