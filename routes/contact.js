var express = require("express"),
    router  = express.Router(),
    Ticket = require("../models/tickets");

// NEW contact template
router.get("/contact", function(req, res){
    res.render("contact");
});

// CREATE a new ticket (client)
router.post("/tickets", function(req, res){
    req.body.ticket.body = req.sanitize(req.body.ticket.body);
    Ticket.create(req.body.ticket, function(err, newTicket){
        if(err){
            res.render("contact");
            console.log(err);
        } else {
            req.flash("success", "Thank you for the message, I'll get back to you as soon as possible!");
            res.redirect("/contact");
        }
    });
});

module.exports = router;