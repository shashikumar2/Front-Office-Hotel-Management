const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roomSchema = new Schema({
  roomNo: {
    type: Number,
    required: true,
    unique: true  
    
  },
  airConditioner: {
    type: Boolean,
    default: false
    
  }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;