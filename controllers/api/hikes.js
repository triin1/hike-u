const Hike = require('../../models/hike');

async function create(req, res) {
    console.log(req.body);
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
        res.status(200)
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

async function show(req, res) {

}

module.exports = {
    create,
    index,
    show
}

