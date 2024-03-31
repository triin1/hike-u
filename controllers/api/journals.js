const Journal = require("../../models/journal");
const cloudinary = require("../../utils/cloudinary");

async function create(req, res) {
  try {
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
    let journals;
    const searchTerm = req.query.searchTerm;
    //if there is searchTerm input
    if (searchTerm) {
      journals = await Journal.find({
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { content: { $regex: searchTerm, $options: "i" } },
        ],
      })
        .populate("user")
        .sort({ date: -1 });
    } else {
      //no search term, fetch all journals
      journals = await Journal.find({ user: req.user._id })
        .populate("user")
        .sort({ date: -1 });
    }

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

async function show(req, res) {
  try {
    const journal = await Journal.findById(req.params.id).populate("user");
    res.json(journal);
  } catch (err) {
    console.log("show journal detail", err);
  }
}

async function update(req, res) {
  console.log("update journey", req.params.id);
  console.log("update journey with data", req.body);
  try {
    const updatedPost = await Journal.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          // date: req.body.date,
          difficulty: req.body.difficulty,
          content: req.body.content,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log("update backend updated journal data", error);
  }
}

module.exports = {
  create,
  index,
  delete: deleteJournal,
  show,
  update,
};
