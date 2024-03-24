const Journal = require("../../models/journal");
const cloudinary = require("../../utils/cloudinary");

async function create(req, res) {
  try {
    console.log("create journal", req.body);
    // Validate input data
    const { title, date, difficulty, content } = req.body;
    if (!title || !date || !difficulty || !content) {
      return res.status(400).json({ message: "Required fields are missing." });
    }
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    const journal = await Journal.create({
      title,
      image: result.secure_url,
      cloudinary_id: result.public_id,
      date,
      difficulty,
      content,
      user: req.user._id,
    });

    res.json(journal);
  } catch (err) {
    res.status(400).json(`create journal on database ${err.message}`);
  }
}

async function index(req, res) {
  try {
    const journals = await Journal.find({}).populate("user");
    res.json(journals);
  } catch (err) {
    console.log(err);
  }
}

async function deleteJournal(req, res) {
  try {
    await Journal.deleteOne({ _id: req.params.id, user: req.user._id });
    res.json(true);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  create,
  index,
  delete: deleteJournal,
};
