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
            res.redirect("/contact");
            // ADD SUCCESS FLASH MESSAGE
        }
    });
});

module.exports = router;