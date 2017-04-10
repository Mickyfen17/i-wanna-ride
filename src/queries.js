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
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved All Users',
      });
    }).catch((err) => {
      return next(err);
  });
}

function signIn(req, res, next) {
  db.one('select * from users where email=${email} and password=${password}', req.body)
  .then((data) => {
  res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved ONE User'
    });
  })
  .catch((err) => {
    return next(err);
  });
}

function createUser(req, res, next) {
  req.body.email = req.body.email.toLowerCase();
  db.one('insert into users(name, password, email)' + 'values(${name}, ${password}, ${email}) returning id', req.body).then((data) => {
    res.status(200).json({ status: 'success', message: "New user created", id: data.id});
  }).catch((err) => {
    res.status(500).json({error: err.detail});
  })
}

module.exports = {
  getAllUsers: getAllUsers,
  signIn: signIn,
  createUser: createUser,
};