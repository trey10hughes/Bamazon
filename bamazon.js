var inquirer = require('inquirer');
var mysql = require('mysql');
var chalk = require('chalk');
var cTable = require("console.table");

var choices = [];


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;

});

bamazonShop();



function bamazonShop() {

    console.log(chalk.green("Items available for sale: "));


    //grabs full product list from the DB and pushes it to an array to be used by inquirer 
    var query = "SELECT item_id, product_name, price, stock_quantity FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);


        for (var i = 0; i < res.length; i++) {

            choices.push(res[i].product_name);



        }; //end of for loop

        console.log("--------------------------------------");

        inquirer
            .prompt([{
                name: "decision",
                type: "list",
                message: chalk.bgCyan("What would you like to buy?"),
                choices: choices
            }, {
                name: "quantity",
                type: "string",
                message: chalk.yellow("How many?"),
                validate: function (answer) {

                    return /[1-9]/gi.test(answer);  //this is a  validation that check for alpha or numeric [a-z1-9]



                } //end of validation

            }])

            .then(function (answers) {

                var quantity = parseInt(answers.quantity);
                var item = answers.decision;

                var query = "SELECT * FROM products WHERE ?";
                connection.query(query, { product_name: item }, function (error, res) {
                    if (error) throw error;

                    if (quantity > parseInt(res[0].stock_quantity)) {

                        console.log(chalk.red("Insufficient stock, quantity available: " + res[0].stock_quantity));

                        //returns user to start of function if they attempt to buy too many of an item
                        bamazonShop();


                    } else {

                        var newQuantity = parseInt(res[0].stock_quantity) - quantity;
                        var retail = (quantity * res[0].price) + res[0].product_sales;


                        console.log(chalk.blue("OK transaction complete!\nThe cost before tax is $" + quantity * res[0].price));

                        //after a successful transaction, update the DB to reflect new stock and product sales for the item that was purchased
                        var query = "UPDATE products SET ?, ? WHERE ?";

                        connection.query(query,
                            [
                                {
                                    stock_quantity: newQuantity
                                },
                                {
                                    product_sales: retail
                                },
                                {
                                    product_name: item
                                }
                            ],
                            function (err, res) {
                                if (err) throw err;

                                console.log(chalk.bgGreen(item + " quantity has been updated, there are now " + newQuantity + " left in stock."));

                                bamazonShop();
                            });
                        return;

                    };





                }); // end of connection


                // end of prompt2

            }); //end of then

    }); //end of then
    //end of connection
    

}