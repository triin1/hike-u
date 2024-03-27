const Hike = require('../../models/hike');

async function create(req, res) {
    try {
        const {distance, 
            startLocation, 
            endLocation, 
            title, 
            description, 
            startDate, 
            endDate, 
            equipments, 
            spots} = req.body
        const user = req.user
        const hike = await Hike.create({
            distance,
            startLocation, 
            endLocation, 
            title, 
            description, 
            startDate, 
            endDate, 
            equipments, 
            spots,
            user: user._id
        })
    } catch (err) {
        res.status(400).json(`Creating Hike error on database: ${err}`)
    }
}

async function index(req, res) {
    try {
        const user = req.user
        const hikes = await Hike.find({user: user._id})
        res.status(200).json(hikes)
    } catch (err) {
        res.status(400).json(`Get hike index error on database: ${err}`)
    }
}

module.exports = {
    create,
    index
}

