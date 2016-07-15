import React, {Component} from "react";
import ReactDOM from "react-dom";

const styles = {
	container: {
		"display": "flex",
		"flexDirection": "row",
		"width": "100%",
		"height": "300px",
		"alignItems": "center"
	},
	button: {
		"flex": "auto",
    	"stroke": "blue",
		"strokeWidth": "1" ,
		"fill": "none",
		"strokeLinecap": "round",
		"strokeLinejoin": "round",
		"transition": "stroke-width 0.2s"
	},
	buttonHover: {
		strokeWidth: "3" 
	},
	slider: {
		flex: "auto",
		display: "flex",
		"flexDirection": "row",
		overflow: "hidden",
		width: "100%",
		"marginLeft": 5,
		"marginRight": 5
	},
	child: {
		flex: 0,
		opacity: 0,
		maxWidth: "100%",
		width: "100%",
		transition: "flex 2s ease, opacity 1s ease",
		height: "100%",

		display: "inline-block"
	},
	current: {
		flex: 1,
		opacity: 1
	},
	dotContainer: {
		height: 20,
		width: 20,
		fill: "black"
	}
};

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0
		};

		this.next = () => {
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
	componentDidMount() {
		let items = ReactDOM.findDOMNode(this).querySelectorAll(".slide-item *");
		for(var i = 0; i < items.length; i++) {
			items[i].style.maxHeight = "300px"
		}
	}
	renderDot(key) {
		return (
			<svg style={{cursor: "pointer"}} width={styles.dotContainer.width} height={styles.dotContainer.height} onClick={() => this.setState({current: key})}>
  				<circle 
  				  cx={styles.dotContainer.width/2}
  				  cy={styles.dotContainer.height/2} 
  				  r={styles.dotContainer.width/2 - 5} stroke="black" fill={(this.state.current === key)? styles.dotContainer.fill: "none"} />
			</svg>
		);
	}
	render() {
		let {children} = this.props;
		if (!children) {
			children = [];
		}
		return (
			<div style={styles.mainContainer}>
				{/*<i style={styles.buttonLeft}  className="fa fa-arrow-circle-left"></i>*/}
				<div style={styles.container}>
					<svg style={
						(this.state.leftHover)? 
							Object.assign({}, styles.button, styles.buttonHover): 
							styles.button
						} 
					  xmlns="http://www.w3.org/2000/svg" 
					  width="60px" height="80px" 
					  viewBox="0 0 50 80" 
					  space="preserve"
					  onClick={this.previous}
					  onMouseEnter={() => this.setState({leftHover: true})}
					  onMouseLeave={() => this.setState({leftHover: false})}>
	    				<polyline points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
	  				</svg>
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
									<div className="slide-item" style={style}>
										{c}
									</div>
								);
							})
						}
					</div>
					{/*<i style={styles.buttonRight}  className="fa fa-arrow-circle-right"></i>*/}
					<svg style={
						(this.state.rightHover)? 
							Object.assign({}, styles.button, styles.buttonHover): 
							styles.button
						} 
					  xmlns="http://www.w3.org/2000/svg" 
					  width="60px" height="80px" 
					  viewBox="0 0 50 80" 
					  space="preserve"
					  onClick={this.next}
					  onMouseEnter={() => this.setState({rightHover: true})}
					  onMouseLeave={() => this.setState({rightHover: false})}>
	    				<polyline points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
	  				</svg>
	  			</div>
  				<div>
  					{
						children.map((c, key) => this.renderDot(key))
					}
  				</div>
			</div>
		);
	}
}

export default Slider;