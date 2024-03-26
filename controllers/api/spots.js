const Hike = require('../../models/hike');

module.exports = {
    index, 
    createSpot
}

async function index(req, res) {
    try {
        const hikes = await Hike.find({user: req.user._id});
        res.json(hikes);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function createSpot(req, res) {
    // hike.spots.push(req.body);
    console.log(req.body);
    try {
        const hike = await Hike.create({title: req.body.name, user: req.user._id});
        console.log(hike);
        res.json(hike);
        // await hike.save();
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}