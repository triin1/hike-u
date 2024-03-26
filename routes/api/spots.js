const express = require('express');
const router = express.Router();
const spotsController = require('../../controllers/api/spots');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET
router.get('/', ensureLoggedIn, spotsController.index);

// POST 
router.post('/', ensureLoggedIn, spotsController.createSpot);

module.exports = router