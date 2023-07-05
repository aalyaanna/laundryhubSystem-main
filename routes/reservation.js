const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');

router.get('/reservation', reservationController.getreservation);
router.post('/reservation', reservationController.postreservation);

module.exports = router;