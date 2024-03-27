const express = require("express");
const router = express.Router();
const journalsCtrl = require("../../controllers/api/journals");
const upload = require("../../utils/multer");

const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/journals/new
router.post(
  "/new",
  upload.single("image"),
  ensureLoggedIn,
  journalsCtrl.create
);

// GET /api/journals
router.get("/", journalsCtrl.index);

// DELETE /api/journals/:id
router.delete("/:id", ensureLoggedIn, journalsCtrl.delete);

// GET /api/journals/:id
router.get("/:id", journalsCtrl.show);

// PUT /api/journals/:id/edit
router.put("/:id", ensureLoggedIn, journalsCtrl.update);

module.exports = router;
