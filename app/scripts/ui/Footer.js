"use strict";
import {Component} from "react";
import Translate from "../Translate";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="footer" >
				<div id="aroundWeb">
					<Translate component="h2" content="footer.title" />
					<div className="social-links">
						<a href="https://github.com/youennPennarun/"><i className="socicon-github"></i></a>
						<a href="https://twitter.com/YouennPennarun"><i className="socicon-twitter"></i></a>
						<a href="https://www.linkedin.com/pub/pennarun-youenn/6a/984/b6"><i className="socicon-linkedin"></i></a>
						<a href="http://www.viadeo.com/fr/profile/pennarun.youenn"><i className="socicon-viadeo"></i></a>
					</div>
				</div>
				<div id="copyright">
					Copyright © Youenn PENNARUN
				</div>
			</div>
		);
	}


}

export default Footer;
