import React, {Component} from "react";

class Translate extends Component {
	constructor(props) {
		super(props);
		let {content, component, className, ...values} = this.props;
		
		this.state = {
			translated: Translate.translate(content, values)
		}

		this.updateTranslation = () => {
			this.setState({translated: Translate.translate(content, values)});
		}
	}
	componentDidMount() {
		Translate.addListener(this.updateTranslation);
	}
	componentWillUnmount() {
		Translate.removeListener(this.updateTranslation);
	}
	render() {
		let {component, className} = this.props;
		if (!component) component = "p"
		return React.createElement(component, {className}, this.state.translated);
		
	}
}

Translate.defaultLanguage = "en";
Translate.selectedLanguage = Translate.defaultLanguage;
Translate.languages = {};
Translate.listeners = [];
Translate.registerTranslations = function(key, data) {
	if (!Translate.languages[key]) {
		Translate.languages[key] = {};
	}
	var uL = (window.navigator.userLanguage || window.navigator.language);
	if (uL) {
		uL = uL.split("-")[0];
		if (!Translate.languages[key]) {
			uL = Translate.defaultLanguage;
		}
	} else {
		uL = Translate.defaultLanguage;
	}
	if (uL != Translate.selectedLanguage) {
		Translate.selectedLanguage = uL;
		notify();
	}
	return Translate.languages[key] = Object.assign(Translate.languages[key], data);

}
Translate.switchLanguage = function(key) {
	if (!Translate.languages[key])
		throw new Error("unknown language " + key);
	Translate.selectedLanguage = key;
	notify();
}
Translate.addListener = function(fn) {
	if (typeof fn != "function")
		throw new Error("not a function");
	Translate.listeners.push(fn);
}
Translate.removeListener = function(fn) {
	let i = Translate.listeners.indexOf(fn);
	if (i !== -1)
		Translate.listeners.splice(i, 1);
}
Translate.translate = function(key, values = {}) {
	var str = get(key);
	if (!str) {
		return "";
	}
	Object.keys(values).forEach(function(key) {
		let re = new RegExp("{ *" + key + " *}", "g");
		str = str.replace(re, values[key]);
	});
	return str;
}


function notify() {
	Translate.listeners.forEach(function(fn) {
		fn();
	});
}

function get(key) {
	var description = Translate.languages[Translate.selectedLanguage];
	return key.split(".").reduce(function(prev, current, index, arr) {
		if (!prev) {
			return null;
		}
		return prev[current];
	}, description);
}

export default Translate;

