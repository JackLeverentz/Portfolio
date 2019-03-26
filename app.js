var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    Blog = require("./models/blog"),
    Ticket = require("./models/tickets"),
    User   = require("./models/user");


// Route config
var indexRoutes = require("./routes/index"),
    aboutRoute  = require("./routes/about"),
    portfolioRoute = require('./routes/portfolio'),
    blogRoutes = require("./routes/blogs"),
    contactRoutes = require("./routes/contact");


// App config
app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


// Local MongoDB conneciton
mongoose.connect("mongodb://localhost/jackleverentz", { useNewUrlParser: true } );



// Call Routes
app.use(indexRoutes);
app.use(aboutRoute);
app.use(portfolioRoute);
app.use(blogRoutes);
app.use(contactRoutes);


// Server listener
let port = 8080;
app.listen(port, function(){
    console.log("Server is listening on localhost:" + port);
});