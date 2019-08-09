// Imports mysql connection
var connection = require("../server.js");

// helper function for SQL syntax
// passing 3 values into the mySQL query
function printQuestionMarks(num){
    var arr = [];
    for (var i =0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob){
        var value = ob[key];
        //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string has spaces, this adds quotation
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table:
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, reult) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;