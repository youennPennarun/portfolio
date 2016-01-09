var ReactDOMServer = require('react-dom/server');
var React = require("react");
console.log(require('../dist/scripts/App').default);
var ReactApp = React.createFactory(require('../app/scripts/App').default);
console.log(ReactApp)
var mailMiddleware = require("./mailMiddleware");

module.exports = function(app) {

	app.get('/', function(req, res){
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