"use strict";
import {Component} from "react"

const styles = {
	logo: {
		marginTop: 50
	},
	white: {
		fill: "#c8c6c6"
	},
	lightgrey: {
		fill: "#7f7f7f"
	},
	grey: {
		fill: "#626262"
	},
	darkgrey: {
		fill: "#404040"
	},
	blue: {
		fill: "#0000ff"
	},
	red: {
		fill: "#888888",
		stroke:"#ff0000",
		strokeWidth:2
	}
};

class Logo extends Component {
	render() {
		return (
			<svg style={styles.logo} width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">

				<path style={styles.lightgrey} d="M0 0 H 90 V 90 Z" />
				<path style={styles.grey} d="M90 0 L 180 90 H 90 Z" />
				<path style={styles.darkgrey} d="M90 90 H 180 L 220 130 H 180 V 180 Z" />

				<path style={styles.darkgrey} d="M 185 135 H 222 V 300 L 185 350 H 185 Z" />
				<path style={styles.lightgrey} d="M 222 135 V 300 L 265 350 V 135 Z" />
				<path d="M 185 350 H 265 L 222 300 Z" />
				
				<path style={styles.lightgrey} d="M450 0 H 360 V 90 Z" />
				<path style={styles.grey} d="M360 0 L 270 90 H 360 Z" />
				<path style={styles.darkgrey} d="M360 90 H 270 L 230 130 H 270 V 180 Z" />
				
				{/*<line style={styles.red} x1="225" y1="0" x2="225" y2="500" />*/}
			</svg>
		)
	}
}

export default Logo;