"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
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
		"strokeWidth": "1",
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

var Slider = (function (_Component) {
	_inherits(Slider, _Component);

	function Slider(props) {
		_classCallCheck(this, Slider);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slider).call(this, props));

		_this.state = {
			current: 0
		};

		_this.next = function () {
			console.log(_this.state.current, "<", _this.props.children.length - 1);
			if (_this.props.children && _this.state.current < _this.props.children.length - 1) {
				_this.setState({ current: ++_this.state.current });
			}
		};
		_this.previous = function () {
			if (_this.state.current > 0) {
				_this.setState({ current: --_this.state.current });
			}
		};
		return _this;
	}

	_createClass(Slider, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var items = _reactDom2.default.findDOMNode(this).querySelectorAll(".slide-item *");
			for (var i = 0; i < items.length; i++) {
				items[i].style.maxHeight = "300px";
			}
		}
	}, {
		key: "renderDot",
		value: function renderDot(key) {
			var _this2 = this;

			return React.createElement(
				"svg",
				{ style: { cursor: "pointer" }, width: styles.dotContainer.width, height: styles.dotContainer.height, onClick: function onClick() {
						return _this2.setState({ current: key });
					} },
				React.createElement("circle", {
					cx: styles.dotContainer.width / 2,
					cy: styles.dotContainer.height / 2,
					r: styles.dotContainer.width / 2 - 5, stroke: "black", fill: this.state.current === key ? styles.dotContainer.fill : "none" })
			);
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var children = this.props.children;

			if (!children) {
				children = [];
			}
			return React.createElement(
				"div",
				{ style: styles.mainContainer },
				React.createElement(
					"div",
					{ style: styles.container },
					React.createElement(
						"svg",
						{ style: this.state.leftHover ? Object.assign({}, styles.button, styles.buttonHover) : styles.button,
							xmlns: "http://www.w3.org/2000/svg",
							width: "60px", height: "80px",
							viewBox: "0 0 50 80",
							space: "preserve",
							onClick: this.previous,
							onMouseEnter: function onMouseEnter() {
								return _this3.setState({ leftHover: true });
							},
							onMouseLeave: function onMouseLeave() {
								return _this3.setState({ leftHover: false });
							} },
						React.createElement("polyline", { points: "45.63,75.8 0.375,38.087 45.63,0.375 " })
					),
					React.createElement(
						"div",
						{ style: styles.slider },
						children.map(function (c, key) {
							var style = undefined;
							if (_this3.state.current === key) {
								style = Object.assign({}, styles.child, styles.current);
							} else {
								style = Object.assign({}, styles.child);
							}
							return React.createElement(
								"div",
								{ className: "slide-item", style: style },
								c
							);
						})
					),
					React.createElement(
						"svg",
						{ style: this.state.rightHover ? Object.assign({}, styles.button, styles.buttonHover) : styles.button,
							xmlns: "http://www.w3.org/2000/svg",
							width: "60px", height: "80px",
							viewBox: "0 0 50 80",
							space: "preserve",
							onClick: this.next,
							onMouseEnter: function onMouseEnter() {
								return _this3.setState({ rightHover: true });
							},
							onMouseLeave: function onMouseLeave() {
								return _this3.setState({ rightHover: false });
							} },
						React.createElement("polyline", { points: "0.375,0.375 45.63,38.087 0.375,75.8 " })
					)
				),
				React.createElement(
					"div",
					null,
					children.map(function (c, key) {
						return _this3.renderDot(key);
					})
				)
			);
		}
	}]);

	return Slider;
})(_react.Component);

exports.default = Slider;