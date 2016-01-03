import {Component} from "react";

const styles = {
	container: {
		display: "flex",
		"flexDirection": "row",
		width: "100%",
		height: "300px",
		"alignItems": "center"
	},
	button: {
		flex:1
	},
	slider: {
		flex:3,
		display: "flex",
		"flexDirection": "row",
		overflow: "hidden",
		width: "100%"
	},
	child: {
		flex: 0,
		maxWidth: "100%",
		width: "100%",
		transition: "flex 2s ease"
	},
	current: {
		flex: 1
	}
}

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0
		}

		this.next = () => {
			console.log(this.state.current, "<", this.props.children.length -1);
			if (this.props.children &&
				this.state.current < this.props.children.length -1) {
				this.setState({current: ++this.state.current});
			}
		}
		this.previous = () => {
			if (this.state.current > 0) {
				this.setState({current: --this.state.current});
			}
		}
	}
	render() {
		let {children} = this.props;
		if (!children) {
			children = [];
		}
		console.log(this.props.children, this.state.current);
		return (
			<div style={styles.container}>
				<button style={styles.button} onClick={this.previous} >prev</button>
				<div style={styles.slider}>
					{
						children.map((c, key) => {
							let style = Object.assign({}, styles.child);
							if (this.state.current === key)
								style.flex = 1;
							return (
								<div style={style}>
									{c}
								</div>
							);
						})
					}
				</div>
				<button style={styles.button} onClick={this.next}>next</button>
			</div>
		)
	}
}

export default Slider;