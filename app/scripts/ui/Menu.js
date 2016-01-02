"use strict";
import {Component} from "react";
import MenuItem from "./MenuItem";
import {Events} from "react-scroll";
import LanguageSelection from "./LanguageSelection";


class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			animated: false,
			current: "about",
			underlineStyle: {
				width: 0
			}
		}
	}
	overItem(elem) {
		this.setState({
			underlineStyle: {
				marginLeft: elem.offsetLeft,
				width: elem.offsetWidth,
				display: "block"
			}
		});
	}
	componentDidMount() {
		let current = document.querySelector("#top-menu .current");
		if (current)
			this.overItem(current);
	}
	toogleMenu() {
		this.setState({showMenu: !this.state.showMenu, animated: true});
	}
	
	render() {
		let {
			underlineStyle,
			showMenu,
			animated,
			current
		} = this.state;
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
					<MenuItem text="About me" color="#B71C1C" linkTo="about" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text="Education" color="#2196F3" linkTo="education" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text="Experiences" color="#3F51B5" linkTo="professional-exp" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text="Portfolio" color="#00BCD4" linkTo="projects" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text="Contact" color="#FF5722" linkTo="contact" current={current} onMouseOver={elem => this.overItem(elem)} />
					<LanguageSelection />
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