var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
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


/* Conect to mongodb
var mongoDB = 'mongodb://127.0.0.1/jackleverentz';
mongoose.connect(mongoDB, {useNewUrlParser: true});

mongoose.connection.once('open',function(){
        console.log("connection has been made!!");
}).on('error', function(error){
    console.log("Connection errror: " + error);
});*/

mongoose.connect("mongodb+srv://jack:Calhunts22@jackleverentz-gnugb.mongodb.net/test?retryWrites=true");

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