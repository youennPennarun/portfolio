var ReactDOMServer = require('react-dom/server');
var React = require("react");
import App from '../app/scripts/App';
var ReactApp = React.createFactory(App);
import Translate from "../app/scripts/Translate";
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
console.log(Translate);
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
var mailMiddleware = require("./mailMiddleware");

module.exports = function(app) {

	app.get('/', function(req, res){
		let lang = req.acceptsLanguages("fr", "en");
console.log("lang = " + lang);
		if (lang) {
			try {
				Translate.switchLanguage(lang);
				Translate.defaultLanguage = lang;
			} catch(e) {
				console.log(e);
			}
		}
		var reactHtml = ReactDOMServer.renderToString(ReactApp());
    	res.render('../dist/index.html', {reactOutput: reactHtml});
	});

	app.post('/api/mail', function(req, res){

		if (req.body.from && req.body.subject && req.body.content) {
			mailMiddleware.send(req.body.from, req.body.subject, req.body.content, function(err) {
				if (err) {
					res.json({error: err});
				} else {
					res.json({status: "success"});
				}
			});
		} else {
			res.status = 400;
			res.json({"error": "invalid request"});
		}
	});

};
