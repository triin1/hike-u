const express = require('express')
const router = express.Router();
const equipmentController = require('../../controllers/api/equipment')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//All paths start with '/api/equipment'

router.post('/', ensureLoggedIn, equipmentController.create);
router.get('/', ensureLoggedIn, equipmentController.index)

module.exports = router;