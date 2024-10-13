const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../Models/User");
const config = require("dotenv").config();
const router = express.Router();

router.get("/fetchuser/:phoneNumber", async (req, res) => {
  const { phoneNumber } = req.params;
  try {
    if (!phoneNumber) {
      return res.status(400).json({ message: "Phone number is required" });
    }
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

router.put("/updateuser", async (req, res) => {
  const { phoneNumber, name, email, dob, areasOfIntrest, gender } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { phoneNumber },
      { name, email, gender, dob, areasOfIntrest },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      success: true,
      msg: `User updated Successfully!`,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});
module.exports = router;
