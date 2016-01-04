var React = require('react'),
ReactApp = React.createFactory(require('../dist/scripts/app'));

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
    	// and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
    	// Output html rendered by react
		// console.log(myAppHtml);
    	res.render('index.html', {reactOutput: reactHtml});
	});

};