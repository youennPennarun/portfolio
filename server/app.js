var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser')

var port = 8080;
global.window = {};
require('node-jsx').install();
app.use( bodyParser.json() )
app.use(express.static(path.join(__dirname, '../dist')));

require("./routes")(app);

app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);