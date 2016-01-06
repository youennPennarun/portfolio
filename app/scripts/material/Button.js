import {Component} from "react";


class Button extends Component {
	
	render() {
		let {label, onClick, disabled} = this.props;
		if (typeof onClick != "function") {
			onClick = function() {};
		}
		return (
			<div>
				<button disabled={(disabled === true || disabled == "disabled")} onClick={onClick}>{label}</button>
			</div>
		);
	}
}

export default Button;