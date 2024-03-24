// title: {type: String, required: true}
// latitude: 
// longitude:
// MAYBE: duration:
// description: 
// spot: [] // free-flow text
// startDate:
// endDate:
// ref: [equipment] -- equipment will be its own model (M-M)
// ref: journal schema (1-1)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hikeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longtitude: {
        type: Number,
        required: true
    },
    
})