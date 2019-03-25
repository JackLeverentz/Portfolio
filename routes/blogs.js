var express = require("express"),
    router  = express.Router();

router.get("/blogs", function(req, res){
    res.render("blogs");
});

module.exports = router;