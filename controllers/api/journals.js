const Journal = require("../../models/journal");

async function create(req, res) {
  try {
    const journal = await Journal.create({
      //specify the property in req.body
      title: req.body.title,
      date: req.body.date,
      difficulty: req.body.difficulty,
      content: req.body.content,
      user: req.user._id,
    });

    await journal.populate("user").execPopulate();

    res.json(journal);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const journals = await Journal.find({});
    res.json(journals);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  create,
  index,
  //     delete: deleteNote,
};
