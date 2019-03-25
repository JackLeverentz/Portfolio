var mongoose = require("mongoose");

// Mongoose model config
var userSchema = new mongoose.Schema({
    username: String,
    Password: String
});

module.exports = mongoose.model("User", userSchema);