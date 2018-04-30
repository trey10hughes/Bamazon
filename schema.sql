DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  product_sales INT(10) NOT NULL,
  primary key(item_id)
);
SELECT * FROM products;
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Star Wars Episode VII (Blu-Ray)", "Movies & TV", 22.99, 500, 0),
  ("Exploding Kittens Card Game", "Toys & Games",19.99, 60, 0),
  ("Athletic Shorts", "Apparel", 14.50, 80, 0),
  ("Yugioh Cards", "Toys & Games", 9.99, 50, 0),
  ("Zip-up Hoodie", "Apparel", 54.25, 35, 0),
  ("Gamecube Controller", "Video Games", 100, 25, 0),
  ("HDMI cord", "Electronics", 4.99, 100, 0),
  ("Wireless Headphones", "Electronics", 49.99, 73, 0),
  ("Nintendo Switch", "Video Games", 299.99, 47, 0),
  ("The Inner Game of Tennis", "Books", 9.95, 39, 0);