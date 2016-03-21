var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');


var PORT = process.env.PORT || 3000;

// Mongo connection //
var db = 'mongodb://localhost/ys';
mongoose.connect(db);


// Using logger & public folder //
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// Requiring Schema //



// App routes //
app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/public/index.html");
});

app.post("/registerdUser", function(req, res) {
 
});


app.listen(PORT, function() {
	console.log("You're listening on %s", PORT);
});