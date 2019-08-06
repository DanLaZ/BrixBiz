var db = require("../models");

module.exports = function(app) {
  //Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function (smbusinessdb) {
      res.render("index", {
        msg: "Welcome!",
        examples: smbusinessdb
      });
    });
  });

  app.get("/signup", function (req, res) {
    db.Example.findAll({}).then(function (smbusinessdb) {
      res.render("signup", {
        msg: "Welcome!",
        examples: smbusinessdb
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (smbusinessdb) {
      res.render("example", {
        example: smbusinessdb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
