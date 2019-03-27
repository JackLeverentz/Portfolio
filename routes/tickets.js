var express   = require("express");
    Ticket   = require("../models/tickets"),
    router   = express.Router();

//INDEX list of tickets
router.get("/tickets", function(req, res){
    Ticket.find({}, function(err, tickets){
        if(err){
            console.log(err);
        } else {
            res.render("tickets", {tickets: tickets})
        }
    });
});
    
module.exports = router;