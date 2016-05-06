var Mailgun = require('mailgun-js');
var recepient = "youenn.pennarun@gmail.com";


var send = function(from, subject, content, callback) {
    var mailgun = new Mailgun({apiKey: process.env.MAILGUN_KEY, domain: "youenn.pennarun.com"});
    var mail = {
    //Specify email data
      from: from,
    //The email to contact
      to: "youenn.pennarun@gmail.com",
    //Subject and text data
      subject: subject,
      html: "<p>" + content + "</p>",
      text: content
    };
	mailgun.messages().send(mail, function (err, body) {
      if (err) {
          console.log(err);
          return callback({status: "error", error: err});
      }
      return callback(null, {status: "success"});
    });
};

module.exports = {
	send: send
};
