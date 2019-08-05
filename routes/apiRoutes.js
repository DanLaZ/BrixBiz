var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/smallBiz", function(req, res) {
    db.SmallBiz.findAll({}).then(function(smbusinessdb) {
      res.json(smbusinessdb);
    });
  });

  // Create a new example
  app.post("/api/smallBiz", function(req, res) {
    db.SmallBiz.create(req.body).then(function(smbusinessdb) {
      res.json(smbusinessdb);
    });
  });

  // Delete an example by id
  app.delete("/api/smallBiz/:id", function(req, res) {
    db.SmallBiz.destroy({ where: { id: req.params.id } }).then(function(smbusinessdb) {
      res.json(smbusinessdb);
    });
  });
};
