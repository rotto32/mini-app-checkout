DROP DATABASE IF EXISTS checkout_data;

CREATE DATABASE IF NOT EXISTS checkout_data;

USE checkout_data;

CREATE TABLE users = {
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(100)
};

CREATE TABLE addresses = {
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    line_one VARCHAR(100),
    line_two VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(100),
    postcode INT,
    user_id FOREIGN KEY
}

CREATE TABLE cc_info = {
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cc_num INT,
    exp_date VARCHAR(20),
    cvv VARCHAR(3),
    billing_code VARCHAR(20),
    user_id FOREIGN KEY


}