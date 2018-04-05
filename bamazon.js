// npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
//sets up connection info for mySQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

//connects to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("connected to bamazon database!");
});