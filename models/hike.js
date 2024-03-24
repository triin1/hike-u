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
    spot: [{
        type: String
    }],
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    equipment: [{
        type: Schema.Types.ObjectId,
        ref: "equipment",
    }],
    journal: {
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Hike", hikeSchema);