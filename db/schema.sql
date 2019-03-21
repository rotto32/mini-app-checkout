DROP DATABASE IF EXISTS checkout_data;

CREATE DATABASE IF NOT EXISTS checkout_data ;

USE checkout_data;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE addresses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    line_one VARCHAR(100),
    line_two VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    postcode INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE cc_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cc_num INT,
    exp_date VARCHAR(20),
    cvv VARCHAR(3),
    billing_code VARCHAR(20),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users
    (name, password, email)
VALUES
    ('Testy McTestface', 'test123', 'test@test.com');

INSERT INTO addresses
    (line_one, line_two, city, state, postcode, user_id)
VALUES
    ('111 Jackson St', 'Suite 5', 'Seattle', 'WA', 98211, 1);

INSERT INTO cc_info
    (cc_num, exp_date, cvv, billing_code, user_id)
VALUES
    (0123456789, '01/01/21', 333, 98441, 1);
