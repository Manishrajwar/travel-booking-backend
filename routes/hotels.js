const express = require('express');
const router = express.Router();
const { getHotels , getAllHotels } = require('../controllers/hotelsController');

router.get('/get-hotels-by-city/:cityId', getHotels);
router.get('/getAllHotels', getAllHotels);

module.exports = router;
