const express = require("express");
const router = express.Router();
const journalsCtrl = require("../../controllers/api/journals");
// const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/journals/new
router.post("/new", journalsCtrl.create);

// GET /api/journals
router.get("/", journalsCtrl.index);

// DELETE /api/journals/:id
router.delete("/:id", journalsCtrl.delete);

module.exports = router;