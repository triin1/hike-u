const Equipment = require("../../models/equipment");

async function create(req, res) {
    try {
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
};

async function index(req, res) {
    try {
        const equipment = await Equipment.find({user: req.user._id});
        res.json(equipment);
    } catch(err) {
        res.status(400).json(err);
    }
};

async function deleteEquipment(req, res) {
    try {
        await Equipment.deleteOne({_id: req.params.id, user: req.user._id});
        res.json(true)
    } catch(err) {
        res.status(400).json(err);
    }
};

// Updates an item's quantity
async function setItemQuantity(req, res) {
    try {
        const item = await Equipment.findById({_id: req.body.itemId});
        // if (item && req.body.newQuantity <= 0) {
        //     await item.deleteOne({_id: req.body.itemId});
        // } else {
        item.quantity = req.body.newQuantity
        // }
        item.save();
        res.json(item);
    } catch(err) {
        res.status(400).json(err);
    }
};

module.exports = {
    create,
    index,
    delete: deleteEquipment,
    setItemQuantity
}