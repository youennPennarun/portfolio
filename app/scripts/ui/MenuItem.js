"use strict";
import {Component} from "react";
import {Link} from "react-scroll";
import ReactDOM from "react-dom";

class MenuItem extends Component {
	constructor(props) {
		super(props);
		
		this.handleScroll = () => {
			let {onMouseOver} = this.props;
			if (this.domNode.classList.contains("active")) {
				onMouseOver(this.domNode, true);
			}
		};
	}
	componentDidMount() {
		document.addEventListener("scroll", this.handleScroll);
		this.referTo = document.querySelector("[name=" + this.props.linkTo + "]");
		this.bounding = this.referTo.getBoundingClientRect();
		this.domNode = ReactDOM.findDOMNode(this);
	}
	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleScroll);
	}
	render() {
		let {text, color, linkTo, current, onMouseOver} = this.props;

		return (
			<Link to={linkTo} className={(current == linkTo)? "item current": "item"} onMouseOver={event => onMouseOver(event.target)}
				spy={true} smooth={true} offset={-55} duration={500}>
				<div className="background" style={{backgroundColor: color}}></div>
				<div className="itemText">{text}</div>
			</Link>
		);
	}
}

export default MenuItem;
