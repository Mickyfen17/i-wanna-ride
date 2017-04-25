const express = require('express');
const db = require('./queries');

const router = express.Router();

router.get('/users', db.getAllUsers);
router.post('/users', db.signIn);
router.post('/users/new', db.createUser);
router.get('/users/:user_id/rides', db.getUserRides);
router.get('/rides', db.getAllRides);
router.post('/rides/new', db.createRide);
router.delete('/users/:user_id/rides/:ride_id', db.deleteRide);
router.post('/matchrides', db.matchRides);

module.exports = router;