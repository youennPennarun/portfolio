var ReactDOMServer = require('react-dom/server');
var React = require("react");
import App from '../app/scripts/App';
var ReactApp = React.createFactory(App);
import Translate from "../app/scripts/Translate";
var mailMiddleware = require("./mailMiddleware");
var superagent = require("superagent");

module.exports = function(app) {

	app.get('/', function(req, res){
		let lang = req.acceptsLanguages("fr", "en");
		if (lang) {
			try {
				Translate.switchLanguage(lang);
				Translate.defaultLanguage = lang;
			} catch(e) {
				console.log(e);
			}
		}
		if (req.query.print) {
			window.matchMedia = function () {return {matches: true}};
		}
		var reactHtml = ReactDOMServer.renderToString(ReactApp());
		delete window.matchMedia;
    	res.render('../dist/index.html', {reactOutput: reactHtml});
	});

	app.post('/api/mail', function(req, res){

		if (req.body.from && req.body.subject && req.body.content) {
            var captchaResponse = req.body.captchaResponse;
            if (!captchaResponse) {
                return res.json({error: {code: 403, data: "invalid captcha"}});
            }
            superagent.post("https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.CAPTCHA_SECRET + "&response=" + captchaResponse)
              .send({
                  secret: process.env.CAPTCHA_SECRET,
                  response: captchaResponse
              })
              .end(function(err, response) {
                if (err || !response.body.success) {
                    return res.json({error: {code: 403, data: "invalid captcha"}});
                }
    			mailMiddleware.send(req.body.from, req.body.subject, req.body.content, function(err) {
    				if (err) {
    					res.json({error: err});
    				} else {
    					res.json({status: "success"});
    				}
    			});
            });
		} else {
			res.status = 400;
			res.json({"error": "invalid request"});
		}
	});

};
