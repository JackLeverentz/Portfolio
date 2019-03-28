var mongoose          = require("mongoose"),
passportLocalMongoose = require("passport-local-mongoose");

// Mongoose model config
var userSchema = new mongoose.Schema({
    username: String,
    Password: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);