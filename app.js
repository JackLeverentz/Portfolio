var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require ("method-override");
    expressSanitizer = require("express-sanitizer"),
    User   = require("./models/user"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    flash = require("connect-flash"),
    passportLocalMongoose = require("passport-local-mongoose"),
    Blog = require("./models/blog"),
    Ticket = require("./models/tickets");
   
// Route config
var indexRoutes = require("./routes/index"),
    aboutRoute  = require("./routes/about"),
    portfolioRoute = require('./routes/portfolio'),
    blogRoutes = require("./routes/blogs"),
    contactRoutes = require("./routes/contact");
    ticketRoutes  = require("./routes/tickets");
    adminRoutes = require("./routes/admin");

// App config
app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(flash());

// Atlas MongoDB connection
mongoose.connect(DATABASEURL, {useNewUrlParser: true});

// Passport Configurations
app.use(require("express-session")({
    secret: "jackrobertleverentz",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash and global user configuration
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// Call Routes
app.use(indexRoutes);
app.use(aboutRoute);
app.use(portfolioRoute);
app.use(blogRoutes);
app.use(contactRoutes);
app.use(ticketRoutes);
app.use(adminRoutes);

// Render error page for any pages that don't exist
app.get("*", function(req, res){
    res.render("error");
});

// Server listener
app.listen(process.env.PORT || 8080);