const express = require('express')
const router = express.Router();
const hikesController = require('../../controllers/api/hikes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//All paths start with '/api/hikes/hike'

// POST hike plan
router.post('/save', hikesController.create)

// GET all hikes
router.get('/index', hikesController.index)

module.exports = router;