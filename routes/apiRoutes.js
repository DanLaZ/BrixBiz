var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/business", function(req, res) {
    db.Business.findAll().then(function (smbusinessdb) {
      res.json(smbusinessdb);
    });
  });

  // Create a new example
  app.post("/api/business", function(req, res) {
    db.Business.create(req.body).then(function (smbusinessdb) {
      res.json(smbusinessdb);
    });
  });

  app.post("/api/signup", function(req, res) {
    db.User.create(req.body).then(function (usersdb) {
      res.json(usersdb);
    });
  });

  // Delete an example by id
  app.delete("/api/business/:id", function(req, res) {
    db.Business.destroy({ where: { id: req.params.id } }).then(function (smbusinessdb) {
      res.json(smbusinessdb);
    });
  });
};

console.log("Hi there! from apiRoutes.js line 33");
