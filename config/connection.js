var mysql = require("mysql");
require("dotenv").config();
console.log(process.env.PRODUCTION);

var connection;
if (process.env.JAWSDB_URL) {
  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  
    connection = mysql.createConnection(process.env.PRODUCTION);


  };

  // Make connection.
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use.
  module.exports = connection;