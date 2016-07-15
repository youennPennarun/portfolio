"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _Translate = require("./Translate");

var _Translate2 = _interopRequireDefault(_Translate);

var _Menu = require("./ui/Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _Header = require("./ui/Header");

var _Header2 = _interopRequireDefault(_Header);

var _About = require("./ui/About");

var _About2 = _interopRequireDefault(_About);

var _Studies = require("./ui/Studies");

var _Studies2 = _interopRequireDefault(_Studies);

var _ProfessionalExp = require("./ui/ProfessionalExp");

var _ProfessionalExp2 = _interopRequireDefault(_ProfessionalExp);

var _Projects = require("./ui/Projects");

var _Projects2 = _interopRequireDefault(_Projects);

var _Contact = require("./ui/Contact");

var _Contact2 = _interopRequireDefault(_Contact);

var _Footer = require("./ui/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_Translate2.default.registerTranslations("en", require("../content/en/en.json"));
_Translate2.default.registerTranslations("fr", require("../content/fr/fr.json"));

var globalData = require("../content/global");

var merge = function merge(dest, source) {
  "use strict";

  for (var k in source) {
    if (!dest[k]) {
      dest[k] = source[k];
    } else {
      if (_typeof(source[k]) === "object") {
        merge(dest[k], source[k]);
      }
    }
  }
  return dest;
};
var data = {
  "en": merge(require("../content/en/data.json"), globalData),
  "fr": merge(require("../content/fr/data.json"), globalData)
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = { content: data[_Translate2.default.selectedLanguage] };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _Translate2.default.addListener(function () {
        _this2.setState({
          content: data[_Translate2.default.selectedLanguage]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.state.content;

      return React.createElement(
        "div",
        null,
        React.createElement(_Menu2.default, null),
        React.createElement(_Header2.default, content.header),
        React.createElement(_About2.default, { about: content.about }),
        React.createElement(_ProfessionalExp2.default, { experiences: content.professional_experiences }),
        React.createElement(_Studies2.default, { studies: content.studies }),
        React.createElement(_Projects2.default, { projects: content.projects }),
        React.createElement(_Contact2.default, null),
        React.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

