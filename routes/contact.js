var express = require("express"),
    router  = express.Router();

// Render contact template
router.get("/contact", function(req, res){
    res.render("contact");
});

module.exports = router;