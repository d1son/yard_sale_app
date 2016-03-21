var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');


var PORT = process.env.PORT || 3000;

// Mongo connection //
var db = 'mongodb://localhost/yardSale';
mongoose.connect(db);

// Using logger & public folder //
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// Requiring Schema //
// var User = require("./model/user.js");
// var Item = require("./models/item.js");
// var Comment = require("./models/comment.js");


// App routes //
app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/public/index.html");
});

app.post("/registerUser", function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, newUser) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(newUser);
    }
  });
});


app.listen(PORT, function() {
	console.log("You're listening on %s", PORT);
});