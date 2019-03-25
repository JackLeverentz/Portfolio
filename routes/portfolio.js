var express = require("express"),
    router  = express.Router();

router.get("/portfolio", function(req, res){
    res.render("portfolio")
});

module.exports = router;