var superagent = require("superagent");
var recepient = "youenn.pennarun@gmail.com";


var send = function(from, subject, content, callback) {
	var mail = {
		"key": process.env.MANDRILL_KEY,
		"message": {
			"html": "<p>" + content + "</p>",
			"text": content,
			"subject": subject,
			"from_email": from,
			"from_name": from,
			"to": [{
				"email": "youenn.pennarun@gmail.com",
				"name": "Youenn PENNARUN",
				"type": "to"
			}]
		}
	};
	superagent.post("https://mandrillapp.com/api/1.0/messages/send.json")
		.send(mail)
		.end(callback);
};

module.exports = {
	send: send
};