"use strict";
import {Component} from "react";
import MenuItem from "./MenuItem";
import LanguageSelection from "./LanguageSelection";
import Translate from "../Translate";


class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			animated: false,
			current: "about",
			menuItems: {},
			underlineStyle: {
				width: 0
			}
		};

		this.translate = () => {
			let menuItems = {
				about: Translate.translate("menu.about"),
				experience: Translate.translate("menu.experience"),
				education: Translate.translate("menu.education"),
				portfolio: Translate.translate("menu.portfolio"),
				contact: Translate.translate("menu.contact"),
			};
			this.setState({menuItems});
		};
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
		this.translate();
		Translate.addListener(this.translate);
	}
	componentWillUnmout() {
		Translate.removeListener(this.translate);
	}
	toogleMenu() {
		this.setState({showMenu: !this.state.showMenu, animated: true});
	}
	
	render() {
		let {
			underlineStyle,
			showMenu,
			animated,
			current,
			menuItems
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
					
					<MenuItem text={menuItems.about} color="#B71C1C" linkTo="about" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text={menuItems.education} color="#2196F3" linkTo="education" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text={menuItems.experience} color="#3F51B5" linkTo="professional-exp" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text={menuItems.portfolio} color="#00BCD4" linkTo="projects" current={current} onMouseOver={elem => this.overItem(elem)} />
					<MenuItem text={menuItems.contact} color="#FF5722" linkTo="contact" current={current} onMouseOver={elem => this.overItem(elem)} />
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