const mongoose = require("mongoose");


//Create Schema and Model
const ticketSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model("Ticket", ticketSchema);