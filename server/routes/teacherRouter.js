const express = require('express');
const lessonsController = require('../controllers/lessonsController.js');
const userController = require('../controllers/userController.js');
const bookingController = require('../controllers/bookingController.js');
const feedbackController = require('../controllers/feedbackController.js');
const messageController = require('../controllers/messageController.js');
const availabilityController = require('../controllers/availabilityController');

const router = require('express').Router();

//allows a teacher to submit their availability
router.route('/submitAvailability').post(availabilityController.submitAvailability);

module.exports = router;
