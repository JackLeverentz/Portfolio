var express = require("express"),
    router = express.Router();

router.get("/", function(req, res){
    res.render("index");
});

// Error message if an undefined route is hit
/*router.get("*", function(req, res){
    res.render("error");
});*/

module.exports = router;