const Equipment = require("../../models/equipment");

async function create(req, res) {
    try {
        console.log(req.body)
        const equipment = await Equipment.create({
            name: req.body.name,
            quantity: req.body.quantity,
            categories: req.body.categories,
            user: req.user._id
        });
        res.json(equipment)
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = {
    create
}