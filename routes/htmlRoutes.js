var db = require("../models");

module.exports = function (app) {
  //Load index page
  app.get("/", function (req, res) {
    db.Business.findAll({}).then(function (smbusinessdb) {
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
  app.get("/business/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (smbusinessdb) {
      res.render("business", {
        example: smbusinessdb
      });
    });
  });

  app.get("/businesses", function (req, res) {
    res.render("businesses");
  });

  app.get("/courier", function (req, res) {
    res.render("courier");
  });



  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
