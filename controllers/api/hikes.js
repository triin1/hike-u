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
        });
        console.log(hike);
       // hike.spots.push(req.body.spots);
        // await hike.save();
        // console.log(hike);

        res.json(hike);
        
    } catch (err) {
        res.status(400).json(`Creating Hike error on database: ${err}`)
    }

    
    
   // console.log(req.body, req.user)
}

module.exports = {
    create
}

