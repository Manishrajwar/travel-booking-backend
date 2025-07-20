const express = require('express');
const router = express.Router();
const { getTripByCity  , getAllTrips} = require('../controllers/tripsController');

router.get('/get-trip-by-city/:cityId', getTripByCity);
router.get('/getAllTrips', getAllTrips);

module.exports = router;
