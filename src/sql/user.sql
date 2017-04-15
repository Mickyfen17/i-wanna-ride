DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR (150) NOT NULL,
  lastname VARCHAR (150) NOT NULL,
  location VARCHAR (150) NOT NULL,
  experience VARCHAR (150) NOT NULL,
  username VARCHAR (150) NOT NULL UNIQUE,
  email VARCHAR (150) NOT NULL UNIQUE,
  password VARCHAR (150) NOT NULL
);

CREATE TABLE rides (
  id SERIAL NOT NULL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  firstname VARCHAR (150) NOT NULL,
  email VARCHAR (150) NOT NULL,
  location VARCHAR (150) NOT NULL,
  latitude VARCHAR (150) NOT NULL,
  longitude VARCHAR (150) NOT NULL,
  experience VARCHAR (150) NOT NULL,
  ridedate VARCHAR (150) NOT NULL,
  ridetime VARCHAR (150) NOT NULL
);

INSERT INTO users (firstname, lastname, location, experience, username, password, email)
  VALUES ('Mike', 'Fenwick', 'Denver', 'Intermediate', 'mikefen', 'password', 'abc@abc.com');

INSERT INTO rides (firstname, user_id, email, location, latitude, longitude, experience, ridedate, ridetime)
  VALUES ('Mike', 1, 'abc@abc.com', 'Denver', '39.7392358', '-104.990251', 'Beginner', '2017-01-01', 'Morning');