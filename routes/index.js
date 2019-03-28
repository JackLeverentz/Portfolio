var express = require("express"),
    router = express.Router();

// Render home page
router.get("/", function(req, res){
    res.render("index");
});

// Render error page for any pages that don't exist
router.get("*", function(req, res){
    res.render("error");
});

module.exports = router;