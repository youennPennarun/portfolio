var ReactDOMServer = require('react-dom/server');
var React = require("react");
import App from '../app/scripts/App';
var ReactApp = React.createFactory(App);
console.log(require('../app/scripts/App'))
var mailMiddleware = require("./mailMiddleware");
var reactHtml = ReactDOMServer.renderToString(ReactApp());

module.exports = function(app) {

	app.get('/', function(req, res){
		
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