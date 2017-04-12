DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR (123) NOT NULL,
  lastname VARCHAR (123) NOT NULL,
  location VARCHAR (123) NOT NULL,
  experience VARCHAR (123) NOT NULL,
  username VARCHAR (123) NOT NULL UNIQUE,
  email VARCHAR (123) NOT NULL UNIQUE,
  password VARCHAR (123) NOT NULL
);

CREATE TABLE rides (
  id SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR (123) NOT NULL,
  email VARCHAR (123) NOT NULL,
  location VARCHAR (123) NOT NULL,
  experience VARCHAR (123) NOT NULL,
  ridedate VARCHAR (123) NOT NULL,
  ridetime VARCHAR (123) NOT NULL
);

INSERT INTO users (firstname, lastname, location, experience, username, password, email)
  VALUES ('Mike', 'Fenwick', 'Denver', 'Intermediate', 'mikefen', 'password', 'abc@abc.com');

INSERT INTO rides (firstname, email, location, experience, ridedate, ridetime)
  VALUES ('Mike', 'abc@abc.com', 'Denver', 'Beginner', '01/01/2017', '10:00 PM');