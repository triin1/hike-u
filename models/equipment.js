const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    categories: {
        type: Array
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Equipment", equipmentSchema)