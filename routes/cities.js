const express = require('express');
const router = express.Router();
const { getAllCities  , getCityAttractions} = require('../controllers/citiesController.js');

router.get('/allCities', getAllCities);
router.get('/get-city-attractions/:cityId', getCityAttractions);

module.exports = router;
