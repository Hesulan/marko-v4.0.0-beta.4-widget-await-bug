require('marko/node-require').install();
require('marko/compiler').defaultOptions.writeToDisk = false;

var express = require('express');
var app = express();

require('lasso').configure({
	plugins: [
		'lasso-marko'
	]
});

app.use(require('lasso/middleware').serveStatic());

var template = require('./template.marko');
app.get('/', function(req, res) {
	template.render({ await: 'no' }, res);
});

app.get('/await', function(req, res) {
	template.render({ await: Promise.resolve('yes') }, res);
});

app.listen(3000);


