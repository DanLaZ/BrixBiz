var db = require("../models");

module.exports = function(app) {
  // Get all businesses
  app.get("/api/businesses", function(req, res) {
    db.business.findAll({})
    .then(function (dbBusiness) {
      res.json(dbBusiness);
    });
  });

  // Get one business by id
  app.get("/api/business/:id", function(req, res) {
    db.business.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  // Create a new business
  app.post("/api/business", function(req, res) {
    console.log("business form");
    console.log(req.body);
    db.business.create(req.body)
    .then(function (dbBusiness) {
      res.json(dbBusiness);
    });
  });

  // Get one user by id
  app.get("/api/user/:id", function(req, res) {
    db.user.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
 
  // Create a new user
  app.post("/api/users", function(req, res) {
    db.user.create(req.body)
    .then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a business by id
  app.delete("/api/business/:id", function(req, res) {
    db.business.destroy({ 
      where: { 
        id: req.params.id 
      } 
    })
    .then(function (dbBusiness) {
      res.json(dbBusiness);
    });
  });

};

console.log("Hi there! from apiRoutes.js line 33");
