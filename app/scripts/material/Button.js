import {Component} from "react";

const bStyle = {

}

class Button extends Component {
	
	render() {
		let {label, onClick, disabled} = this.props;
		if (typeof onClick != "function") {
			onClick = function() {};
		}
		return (
			<div>
				<button disabled={(disabled == true || disabled == "disabled")} enabled style={bStyle}>{label}</button>
			</div>
		);
	}
}

export default Button;