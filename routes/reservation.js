const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');

router.get('/reserve', reservationController.getreservation);
router.post('/reserve', reservationController.postreservation);

module.exports = router;