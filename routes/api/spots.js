const express = require('express')
const router = express.Router();
const spotsController = require('../../controllers/api/spots');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /hikes/:id/spots (create spot for a hike)
router.post('/hikes/:id/spots', ensureLoggedIn, spotsController.createSpot);