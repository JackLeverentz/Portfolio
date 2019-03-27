var mongoose = require("mongoose")

//Create Schema and Model
var ticketSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Ticket", ticketSchema);