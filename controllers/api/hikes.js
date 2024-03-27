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
<<<<<<< HEAD
        });
        console.log(hike);
       // hike.spots.push(req.body.spots);
        // await hike.save();
        // console.log(hike);

        res.json(hike);
        
=======
        })
        res.status(200)
>>>>>>> 68c7bc631c0db588d1189c1e0019885b16e4bdc8
    } catch (err) {
        res.status(400).json(`Creating Hike error on database: ${err}`)
    }
}

<<<<<<< HEAD
    
    
   // console.log(req.body, req.user)
=======
async function index(req, res) {
    try {
        const user = req.user
        const hikes = await Hike.find({user: user._id})
        res.status(200).json(hikes)
    } catch (err) {
        res.status(400).json(`Get hike index error on database: ${err}`)
    }
>>>>>>> 68c7bc631c0db588d1189c1e0019885b16e4bdc8
}

module.exports = {
    create,
    index
}

