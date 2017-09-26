DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  rating integer NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

