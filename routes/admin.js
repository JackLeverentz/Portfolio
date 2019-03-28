var express = require("express"),
    passport = require("passport"),
    User   = require("../models/user");
    router  = express.Router();
    middlware = require("../middleware/index");

// Register Admnim
router.get("/register", middlware.isLoggedIn, function(req, res){
    res.render("register")
});

/* Handle User signup (If I need to make another account)
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
       if(err){
           console.log(err);
           return res.render("register")
       } 
       passport.authenticate("local")(req, res, function(){
           res.redirect("tickets");
       });
    });
});*/
    
// Render admin signin template
router.get("/login", function(req, res){
    res.render("login");
});

// Handle admin singin
router.post("/login", passport.authenticate("local", 
    {
        successRedirect:"/",
        failureRedirect:"/login"
    }), function(req, res){
});
    
module.exports = router;
