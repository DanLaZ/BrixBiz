var db = require("../models");

module.exports = function(app) {
  //Load index page
  app.get("/", function(req, res) {
    db.business.findAll({}).then(function(smbusinessdb) {
      res.render("index", {
        msg: "Welcome!",
        examples: smbusinessdb
        
      });
    });
  });
  //Load signup page
  app.get("/signup", function(req, res) {
    db.user.findAll({}).then(function(smbusinessdb) {
      res.render("signup", {
        msg: "Welcome!",
        examples: smbusinessdb
      });
    });
  });

  //Load ADDBUS page
  app.get("/addbus", function (req, res) {
    db.business.findAll({}).then(function (smbusinessdb) {
      res.render("addbus", {
        msg: "Welcome!",
        examples: smbusinessdb
      });
    });
  });
  //Load signIN page
  app.get("/signin", function (req, res) {
    db.user.findAll({}).then(function (smbusinessdb) {
      res.render("signin", {
        msg: "Welcome!",
        examples: smbusinessdb
      });
    });
  });
  
  //Load index page
  app.get("/index", function (req, res) {
    db.business.findAll({}).then(function (smbusinessdb) {
      res.render("index", {
        msg: "Welcome!",
        examples: smbusinessdb
      });
    });
  });

  //Load ABOUT US
  app.get("/aboutus", function (req, res) {
    db.business.findAll({}).then(function () {
      res.render("aboutus", {
      });
    });
  });

  //Load dash board page
  app.get("/dashboard", function (req, res) {
    db.business.findAll({}).then(function () {
      res.render("dashboard", {
      });
    });
  });
    
  // Load example page and pass in an example by id
  app.get("/business/:id", function(req, res) {
    db.business.findOne({ where: { id: req.params.id } }).then(function (smbusinessdb) {
      res.render("business", {
        example: smbusinessdb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
