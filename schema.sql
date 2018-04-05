DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);
SELECT * FROM products;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Episode VI:I The Last Jedi (Blu-ray)", "Movies & TV", 22.99, 500),
  ("Exploding Kittens Card Game", "Toys & Games",19.99, 60),
  ("Athletic Shorts", "Apparel", 14.50, 80),
  ("Yugioh Cards", "Toys & Games", 9.99, 50),
  ("Zip-up Hoodie", "Apparel", 54.25, 35),
  ("Gamecube Controller", "Video Games", 100, 25),
  ("HDMI cord", "Electronics", 4.99, 100),
  ("Wireless Headphones", "Electronics", 49.99, 73),
  ("Nintendo Switch", "Video Games", 299.99, 47),
  ("The Inner Game of Tennis", "Books", 9.95, 39);