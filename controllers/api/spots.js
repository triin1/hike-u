const Hike = require('../../models/hike');

module.exports = {
    createSpot
}

async function createSpot(req, res) {
    const hike = await Hike.findById(req.params.id);
    // hike.spots.push(req.body);
    try {
        res.json(hike);
        // await hike.save();
    } catch (err) {
        res.status(400).json(err);
    }
}