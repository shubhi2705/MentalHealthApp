const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 12, // Minimum length
    maxlength: 15,
  },
  password: { type: String, required: true },
  email: { type: String },
  dob: { type: String },
  areasOfIntrest: { type: String, maxlength: 50 },
  otp: { type: String },
  otpExpires: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
