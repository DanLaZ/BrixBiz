// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize.
var sequelize = new Sequelize("smbusinessdb", "root", "LocalDBpw", {
  host: "localhost",
  port: 3000,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
