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

const spotSchema = new Schema({
    content: {
        type: String, // TODO: does this need to be objectID?
    }
}, {
    timestamps: true
});

const hikeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startLocation: {
        type: [Number]
    },
    endLocation: {
        type: [Number]
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    equipments: [String],
    journal: {
        type: Schema.Types.ObjectId
    },
    spots: [spotSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Hike", hikeSchema);