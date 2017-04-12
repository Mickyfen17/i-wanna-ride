const express = require('express');
const db = require('./queries');

const router = express.Router();

router.get('/users', db.getAllUsers);
router.post('/users', db.signIn);
router.post('/users/new', db.createUser);
router.get('/rides', db.getAllRides);
router.post('/rides/new', db.createRide);

module.exports = router;