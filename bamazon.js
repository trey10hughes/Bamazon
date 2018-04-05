// npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
// connects to mySQL db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});