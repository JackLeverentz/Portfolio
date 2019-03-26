var express = require("express"),
    router  = express.Router(),
    Ticket = require("../models/tickets");

// Render contact template
router.get("/contact", function(req, res){
    res.render("contact");
});

// Render the list of tickets(admin)
router.get("/tickets", function(req, res){
    res.render("tickets");
});

// CREATE a new ticket (client)
router.post("/tickets", function(req, res){
    req.body.ticket.body = req.sanitize(req.body.ticket.body);
    Ticket.create(req.body.ticket, function(err, newTicker){
        if(err){
            res.render("contact");
        } else {
            res.redirect("/tickets");
        }
    });
});

module.exports = router;