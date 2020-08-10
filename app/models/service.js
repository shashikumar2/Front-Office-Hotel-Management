const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  
  room: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Room"
  },

  type: {
    type: String,
    required: true,
    
  },
  
  worker: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: "Worker"
  },

  date : {
    type: String,
    required: true, 
  },

  time: {
    type: String,
    required: true
  },
 
  completed: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
},
 
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;