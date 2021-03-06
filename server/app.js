//require("babel-register")({experimental: true});
//require('babel-core/register');
require("babel-core/register")({});
var express = require('express');
var app = express();
var path = require("path");

function printInRed(message) {
    const redTag = "\x1b[31m";
    const whiteTag = "\x1b[37m";
    console.log(`${redTag}${message}${whiteTag}`);
}

if (!process.env.MAILGUN_KEY) {
    printInRed("Missing mailgun api key");
}
if (!process.env.CAPTCHA_SECRET) {
    printInRed("Missing repatcha api key");
}

app.set('port', (process.env.PORT || 8080));

app.use("/favicon.ico", express.static(path.join(__dirname, '../dist/favicon.ico')));
app.use("/styles", express.static(path.join(__dirname, '../dist/styles')));
app.use("/scripts", express.static(path.join(__dirname, '../dist/scripts')));
app.use("/images", express.static(path.join(__dirname, '../dist/images')));
//app.use(express.static(path.join(__dirname, '../dist')));
var bodyParser = require('body-parser')
app.engine('html', require('ejs').renderFile);
var port = 8080;
global.window = {};
//require('babel-register');
//require('node-babel')();
app.use( bodyParser.json() )

require("./routes")(app);

app.get('*', function(req, res) {
    res.status(404);
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(app.get("port"));
console.log('Server is Up and Running at Port : ' + app.get("port"));