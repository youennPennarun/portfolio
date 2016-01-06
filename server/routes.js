var React = require('react'),
ReactApp = React.createFactory(require('../dist/scripts/app'));

var mailMiddleware = require("./mailMiddleware");

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = React.renderToString(ReactApp({}));
    	res.render('index.html', {reactOutput: reactHtml});
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