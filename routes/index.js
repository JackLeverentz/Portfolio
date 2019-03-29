var express = require("express"),
    router = express.Router();

// Render home page
router.get("/", function(req, res){
    res.render("index");
});



module.exports = router;