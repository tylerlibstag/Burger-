DROP DATABASE IF EXISTS burgers;

CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burger(
    id INT UNSIGNED AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)
