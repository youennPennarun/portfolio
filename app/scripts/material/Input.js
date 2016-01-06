import {Component} from "react";

class Input extends Component {
	
	render() {
		let {label, value, onChange, ...attrs} = this.props;
		if (typeof onChange != "function") {
			onChange = function() {};
		}
		return (
			<div className="form-group">
				<input className={(value)? "dirty": ""} value={value || ""} onChange={(event) => onChange(event.target.value)} required={(attrs.required === true)}/>
				<label>{label}</label>
				<span className="bottom-bar"/>
			</div>
		);
	}
}

export default Input;