var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {
      type : String,
      required : true,
      unique : true
    },
    email : {
      type : String,
      required : true,
      unique: true
    },
    password: {
      type: STRING,
      required : true,
      unique : true
    }
    createdDate : {
      type : Date,
      default : Date.now()
    },
});

var User = mongoose.model('User', userSchema);
module.exports = User;