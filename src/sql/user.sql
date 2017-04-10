DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR (123) NOT NULL,
  last_name VARCHAR (123) NOT NULL,
  location VARCHAR (123) NOT NULL,
  experience VARCHAR (123) NOT NULL,
  username VARCHAR (123) NOT NULL,
  email VARCHAR (123) NOT NULL,
  password VARCHAR (123) NOT NULL
);

-- CREATE TABLE favorites (
--   id SERIAL NOT NULL PRIMARY KEY,
--   movie_id INTEGER NOT NULL,
--   user_id INTEGER NOT NULL,
--   title VARCHAR (123) NOT NULL,
--   poster_path VARCHAR (250) NOT NULL,
--   release_date VARCHAR (123) NOT NULL,
--   vote_average VARCHAR (123) NOT NULL,
--   overview VARCHAR NOT NULL
-- );

CREATE UNIQUE INDEX email ON users (email);


INSERT INTO users (first_name, last_name, location, experience, username, password, email)
  VALUES ('Mike', 'Fenwick', 'Denver', 'Intermediate', 'mikefen', 'password', 'abc@abc.com');