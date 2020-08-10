const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    min: 10
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;