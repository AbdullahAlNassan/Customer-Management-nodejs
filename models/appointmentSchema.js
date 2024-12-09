const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  customerName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
}, { timestamps: true });

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;