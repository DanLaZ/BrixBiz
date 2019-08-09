var db = require("../models");
var business = require("../models/business.js");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/business", function(req, res) {
//     db.Business.findAll().then(function (smbusinessdb) {
//       res.json(smbusinessdb);
//     });
//   });


//   // Create a new example
//   app.post("/api/business", function(req, res) {
//     db.Business.create(req.body).then(function (smbusinessdb) {
//       res.json(smbusinessdb);
//     });
//   });

//   app.post("/signup", function(req, res) {
//     db.User.create(req.body).then(function (smbusinessdb) {
//       res.json(smbusinessdb);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/business/:id", function(req, res) {
//     db.Business.destroy({ where: { id: req.params.id } }).then(function (smbusinessdb) {
//       res.json(smbusinessdb);
//     });
//   });
// };

module.exports = function(app, db) {
  
  app.get("/api/all", function(req, res) {
    db.business.findAll({}).then(function(results) {
      res.json(results);
      console.log("Hey I'm here");
    });
  });


  app.get( "/api/business/:id", (req, res) =>
    db.business.findByPk(req.params.id).then( (result) => res.json(result))
  );

  app.post("/post", (req, res) => 
    db.business.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  );

  app.put( "/api/business/:id", (req, res) =>
    db.business.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  app.delete( "/post/:id", (req, res) =>
    db.business.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}

console.log("Hi there!");
