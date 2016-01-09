import React, {Component} from "react";

class TextArea extends Component {
	resize(event) {
		let target = event.target;
		console.log(target, target.scrollHeight);
		target.style.height = 0;
		target.style.height = target.scrollHeight+"px";
	}
	render() {
		let {label, value, onChange, ...attrs} = this.props;
		if (typeof onChange != "function") {
			onChange = function() {};
		}
		return (
			<div className="form-group" style={{height: "auto"}}>
				<textarea className={(value)? "dirty": ""} value={value} onChange={(event) => {this.resize(event); onChange(event.target.value);} } required={(attrs.required === true)} />
				<label>{label}</label>
				<span className="bottom-bar"/>
			</div>
		);
	}
}

export default TextArea;