"use strict";
import {Component} from "react";

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			animated: false,
			underlineStyle: {
			}
		}
	}
	overItem(event) {
		console.log(event.target.offsetLeft);
		console.log(event.target.offsetWidth);
		this.setState({
			underlineStyle: {
				marginLeft: event.target.offsetLeft,
				width: event.target.offsetWidth,
				display: "block"
			}
		});
	}
	toogleMenu() {
		this.setState({showMenu: !this.state.showMenu, animated: true});
	}
	render() {
		let {underlineStyle, showMenu, animated} = this.state;
		let layerClass = "show-menu__layer";
		if (animated) {
			if (showMenu) {
				layerClass += " icon--to-arrow";
			} else {
				layerClass += " icon--from-arrow";
			}
		}
		return (
			<div id="top-menu">
				<div className={(showMenu)? "items active": "items"}>
					<div onMouseOver={ event => this.overItem(event) }>
						<div className="background" style={{backgroundColor: "#B71C1C"}}></div>
						<div className="itemText">About me</div>
					</div>
					<div onMouseOver={ event => this.overItem(event) }>
						<div className="background" style={{backgroundColor: "#2196F3"}}></div>
						<div className="itemText">Education</div>
					</div>
					<div onMouseOver={ event => this.overItem(event) }>
						<div className="background" style={{backgroundColor: "#3F51B5"}}></div>
						<div className="itemText">Experiences</div>
					</div>
					<div onMouseOver={ event => this.overItem(event) }>
						<div className="background" style={{backgroundColor: "#00BCD4"}}></div>
						<div className="itemText">Portfolio</div>
					</div>
					<div onMouseOver={ event => this.overItem(event) }>
						<div className="background" style={{backgroundColor: "#FF5722"}}></div>
						<div className="itemText">Contact</div>
					</div>
				</div>
				<div style={underlineStyle} className="underline"></div>
				<div className="show-menu" onClick={() => this.toogleMenu() }>
					<span className={layerClass}></span>
				</div>
			</div>
		);
	}


}

export default Menu;