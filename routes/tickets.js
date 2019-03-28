var express   = require("express");
    Ticket   = require("../models/tickets"),
    router   = express.Router();


//INDEX find and render the list of tickets
router.get("/tickets", function(req, res){
    Ticket.find({}, function(err, tickets){
        if(err){
            console.log(err);
        } else {
            res.render("tickets", {tickets: tickets})
        }
    });
});

// SHOW an individual ticket
router.get("/tickets/:id", function(req, res){
    Ticket.findById(req.params.id, function(err, foundTicket){
        if(err){
            res.redirect("/tickets");
        } else {
            res.render("showTicket", {ticket: foundTicket});
        }
    });
});

// DESTROY a individal ticket
router.delete("/tickets/:id", function(req, res){
    Ticket.findByIdAndRemove(req.params.id, function(err){
        if(err){
           res.redirect("/tickets");
        } else {
            res.redirect("/tickets");
        }
    });
});
    
module.exports = router;