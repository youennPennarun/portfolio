//require("babel-register")({experimental: true});
//require('babel-core/register');
require("babel-core/register")({});
var express = require('express');
var app = express();
var path = require("path");

app.set('port', (process.env.PORT || 8080));

console.log(path.join(__dirname, '../dist/styles'));
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
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(app.get('port'));
console.log('Server is Up and Running at Port : ' + app.get('port'));