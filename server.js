require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var models = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.urlencoded({extended: false}))
// For Passport
 
app.use(session({ secret: "keyboard cat",resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(express.json());
app.use(express.static("./app/public"));

//For Handlebars
app.engine("handlebars", exphbs({
    // layoutsDir: "views/layouts",
    defaultLayout: "main"
}));
// 
app.set("view engine", "handlebars");

// app.get("/", function(req, res) {
//     res.send("Welcome to Passport with Sequelize");
// });

//Routes
require("./routes/auth.js")(app,passport);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//load passport strategies
require("./config/passport/passport.js")(passport, models.user);



//Sync Database
models.sequelize.sync().then(function() {
    console.log("Nice! Database looks fine")
    app.listen(PORT, function(err) {
        if (!err)
            console.log("Site is live");
        else console.log(err)
    });
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

module.exports = app;
