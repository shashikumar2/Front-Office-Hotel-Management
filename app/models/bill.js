const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const billSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 20
  },

  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer"    
  },

  rooms: {
    type: Number,
    required: true    
  },

  checkIn: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Booking"
  },

  checkOut: {
    type: Date,
    required: true   
    },

    time: {
      type: String,
      required: true
    },
  
  noOfDays: {
    type: Number,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  amount: {
    type: String,
    required: true,    
  },

  createdAt: {
    type: Date,
    default: Date.now
},
  
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;