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

equipmentSchema.statics.getAll = function(userId) {
    return this.findOneAndUpdate(
      { user: userId },
      { user: userId },
      { upsert: true, new: true }
    );
  };

equipmentSchema.methods.setQuantity = function(itemId, newQuantity) {
    const item = this;
    const equipmentItem = item.equipmentItems.find(equipmentItem => equipmentItem._id.equals(itemId));
    if (equipmentItem && newQuantity <= 0) {
        equipmentItem.deleteOne();
    } else if (equipmentItem) {
        equipmentItem.quantity = newQuantity
    }
    return item.save();
  };


equipmentSchema.methods.setItemQuantity = function(itemId, newQuantity) {
    const item = this;
    const equipmentItem = item.equipmentItems.find(equipmentItem => equipmentItem._id.equals(itemId));
    if (equipmentItem && newQuantity <= 0) {
        equipmentItem.remove();
    } else if (equipmentItem) {
        equipmentItem.quantity = newQuantity
    }
    return item.save();
}

module.exports = mongoose.model("Equipment", equipmentSchema)