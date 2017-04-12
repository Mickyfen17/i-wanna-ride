const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/users';
const db = pgp(connectionString);

// add query functions
function getAllUsers(req, res, next) {
  db.any('select * from users')
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved All Users',
    });
  })
  .catch((err) => {
    return next(err);
  });
}

function getAllRides(req, res, next) {
  db.any('select * from rides')
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved All Rides',
    });
  })
  .catch((err) => {
    return next(err);
  });
}

function signIn(req, res, next) {
  db.one('select * from users where username=${username} and password=${password}', req.body)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved ONE User',
    });
  })
  .catch((err) => {
    return next(err);
  });
}

function createUser(req, res, next) {
  req.body.email = req.body.email.toLowerCase();
  db.one('insert into users(firstname, lastname, location, experience, username, email, password)' +
  'values(${firstname}, ${lastname}, ${location}, ${experience}, ${username}, ${email}, ${password}) returning id', req.body)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      id: data.id,
      message: 'New user created',
    });
  })
  .catch((err) => {
    res.status(500)
    .json({
      error: err.detail,
    });
  });
}

function createRide(req, res, next) {
  req.body.location = req.body.location.toLowerCase();
  db.one('insert into rides(firstname, email, location, experience, ridedate, ridetime)' +
  'values(${firstname}, ${lastname}, ${email}, ${location}, ${experience}, ${ridedate}, ${ridetime}) returning id', req.body)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      id: data.id,
      message: 'New ride created',
    });
  })
  .catch((err) => {
    res.status(500)
    .json({
      error: err.detail,
    });
  });
}

module.exports = {
  getAllUsers,
  signIn,
  createUser,
  getAllRides,
  createRide,
};