import {Component} from "react";

const styles = {
	container: {
		display: "flex",
		"flexDirection": "row",
		width: "100%",
		height: "300px",
		"alignItems": "center"
	},
	buttonLeft: {
		flex:1,
		fontSize: "24px",
		"float": "right",
		"paddingRight": "10px",
    	"textAlign": "right"
	},
	buttonRight: {
		flex:1,
		fontSize: "24px",
		"paddingLeft": "10px",
    	"textAlign": "left"
	},
	slider: {
		flex:6,
		display: "flex",
		"flexDirection": "row",
		overflow: "hidden",
		width: "100%"
	},
	child: {
		flex: 0,
		opacity: 0,
		maxWidth: "100%",
		width: "100%",
		transition: "flex 2s ease, opacity 1s ease"
	},
	current: {
		flex: 1,
		opacity: 1,
	}
};

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0
		};

		this.next = () => {
			console.log(this.state.current, "<", this.props.children.length -1);
			if (this.props.children &&
				this.state.current < this.props.children.length -1) {
				this.setState({current: ++this.state.current});
			}
		};
		this.previous = () => {
			if (this.state.current > 0) {
				this.setState({current: --this.state.current});
			}
		};
	}
	render() {
		let {children} = this.props;
		if (!children) {
			children = [];
		}
		console.log(this.props.children, this.state.current);
		return (
			<div style={styles.container}>
				<i style={styles.buttonLeft} onClick={this.previous} className="fa fa-arrow-circle-left"></i>
				<div style={styles.slider}>
					{
						children.map((c, key) => {
							let style;
							if (this.state.current === key) {
								style = Object.assign({}, styles.child, styles.current);
							} else {
								style = Object.assign({}, styles.child);
							}
							return (
								<div style={style}>
									{c}
								</div>
							);
						})
					}
				</div>
				<i style={styles.buttonRight} onClick={this.next} className="fa fa-arrow-circle-right"></i>
				
			</div>
		);
	}
}

export default Slider;