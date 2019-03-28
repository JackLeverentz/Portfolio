var express = require("express"),
    router  = express.Router();
    Blog = require("../models/blog");
    middleware = require("../middleware/index");

// Render the list of blogs
router.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("blogs/blogs", {blogs: blogs});
        }
    });
});

// Render the new blog form
router.get("/blogs/new", middleware.isLoggedIn, function(req, res){
    res.render("blogs/newBlog");
});

// CREATE route
router.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            console.log(err);
            res.render("blogs/new");
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
            res.render("blogs/showBlog", {blog: foundBlog});
        }
    });
});

// EDIT route
router.get("/blogs/:id/edit", middleware.isLoggedIn, function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("blogs/editBlog", {blog: foundBlog})
        }
    });
});

// UPDATE route
router.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DESTROY route
router.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});

module.exports = router;