const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  
  phone: {
    type: Number,
    required: true,
    min: 10
  },
  available: {
    type: Boolean,
    default: false
  }
});

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;