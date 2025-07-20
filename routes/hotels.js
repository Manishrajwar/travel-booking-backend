const express = require('express');
const router = express.Router();
const { getHotels } = require('../controllers/hotelsController');

router.get('/get-hotels-by-city/:cityId', getHotels);

module.exports = router;
