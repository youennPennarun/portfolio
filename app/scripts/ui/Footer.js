"use strict";
import {Component} from "react";
import {Element} from "react-scroll"; 

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="footer" >
				<div id="aroundWeb">
					Around the Web
				</div>
				<div id="copyright">
					Copyright © Youenn PENNARUN
				</div>
			</div>
		);
	}


}

export default Footer;
