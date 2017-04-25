const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise,
};

const env = process.env.DATABASE_URL;
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/users';
const db = pgp(env || connectionString);

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

function getUserRides(req, res, next) {
  const user_id = parseInt(req.params.user_id, 10);
  db.any('select * from rides where user_id=$1', user_id)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved User Rides',
    });
  })
  .catch((err) => {
    return next(err);
  });
}

function matchRides(req, res, next) {
  const user_id = parseInt(req.params.id, 10);
  db.any('select * from rides where ridedate=${date} and ridetime=${time} and experience=${experience} and location=${location} and user_id!=${userID}', req.body)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Matched ride found',
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
  'values(${firstname}, ${lastname}, ${location}, ${experience}, ${username}, ${email}, ${password}) returning *', req.body)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
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
  db.one('insert into rides(user_id, firstname, email, location, latitude, longitude, experience, ridedate, ridetime)' +
  'values(${user_id}, ${firstname}, ${email}, ${location}, ${latitude}, ${longitude}, ${experience}, ${ridedate}, ${ridetime}) returning id', req.body)
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

function deleteRide(req, res, next) {
  const user_id = parseInt(req.params.user_id, 10);
  const ride_id = parseInt(req.params.ride_id, 10);
  db.result('delete from rides where user_id = $1 and id = $2', [user_id, ride_id])
  .then((result) => {
    res.status(200)
    .json({
      status: 'success',
      message: `Ride ${result.rowCount} has been deleted`,
    });
  })
  .catch((err) => {
    next(err);
  });
}

module.exports = {
  getAllUsers,
  signIn,
  createUser,
  createRide,
  getUserRides,
  getAllRides,
  matchRides,
  deleteRide,
};