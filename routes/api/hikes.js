const express = require('express')
const router = express.Router();
const hikesController = require('../../controllers/api/hikes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//All paths start with '/api/hikes'

router.post('/', ensureLoggedIn, hikesController.createSpot);


module.exports = router;