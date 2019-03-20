var express = require("express");

// App config
app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/portfolio", function(req, res){
    res.render("portfolio")
})

app.get("/blogs", function(req, res){
    res.render("blogs");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

// Error message if a undefined route is hit
app.get("*", function(req, res){
    res.render("error");
});

let port = 8080;
app.listen(port, function(){
    console.log("Server is listening on localhost:" + port);
});
