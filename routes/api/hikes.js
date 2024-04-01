const express = require('express')
const router = express.Router();
const hikesController = require('../../controllers/api/hikes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//All paths start with '/api/hikes/hike'

// POST hike plan
router.post('/save', hikesController.create)

// GET all hikes
router.get('/index', hikesController.index)

// GET delete hike
router.get('/:id/delete', hikesController.delete)

// GET certain hike
router.get('/:id', hikesController.show)



module.exports = router;