var express = require("express"),
    router  = express.Router();
    Blog = require("../models/blog");


// Render the list of blogs
router.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("blogs", {blogs: blogs});
        }
    });
});

// Render the new blog form
router.get("/blogs/new", function(req, res){
    res.render("newBlog");
});

// CREATE route
router.post("/blogs", function(req, res){
    // create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            console.log(err);
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

// SHOW route
router.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log(err);
            res.redirect("/index");
        } else {
            res.render("showBlog", {blog: foundBlog});
        }
    });
});

module.exports = router;