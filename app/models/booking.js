const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  
  customer: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: "Customer"
    
  },

  rooms: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "Room"
  },

  checkIn: {
    type: Date,
    required: true   
    },
    

  time: {
    type: String,
    required: true
  },
  
  checkOut: {
    type: Date,
    required: true    
    },


  adults: {
    type: String,
    required: true
  },
 
  createdAt: {
        type: Date,
        default: Date.now
    },
  
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;