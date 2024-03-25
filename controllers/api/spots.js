const Hike = require('../../models/hike');

module.exports = {
    createSpot
}

async function createSpot(req, res) {
    const hike = await Hike.findById(req.params.id);
    hike.spots.push(req.body);
    try {
        // save changes made to hike model
        await hike.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/hikes/${hike._id}`);
}