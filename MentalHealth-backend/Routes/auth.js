const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const otpGenerator = require('otp-generator');
const User = require('../Models/User');
const config=require('dotenv').config();
const router = express.Router();

const accountSId=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER= process.env.TWILIO_PHONE_NUMBER
const JWT_SECRET= process.env.JWT_SECRET

// Configure Twilio
const twilioClient = twilio(accountSId,authToken);

// Signup
router.post('/signup', async (req, res) => {
    const { phoneNumber, password,name,email,areasOfIntrest,gender } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = otpGenerator.generate(6, { upperCase: true, specialChars: false });
        const user = new User({name:name,email:email,gender:gender, areasOfIntrest:areasOfIntrest,phoneNumber, password: hashedPassword, otp, otpExpires: Date.now() + 300000 });

        await User.findOneAndUpdate(
            {phoneNumber},
            {name,email,gender,password, otp, otpExpires:Date.now() + 300000},
            {upsert:true, new:true,setDefaultsOnInsert:true}
        );

        // Send OTP via SMS
        await twilioClient.messages.create({
            body: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
            from: TWILIO_PHONE_NUMBER,
            to: phoneNumber
        });

        res.status(201).json({
            success:true,
            msg:`User created. Check your phone for OTP-${otp}`
        });
    } catch (error) {
        res.status(500).json({
           success:false,
           msg:error.message
        });
    }
});

// Verify OTP and Signin
router.post('/signin', async (req, res) => {
    const { phoneNumber, otp } = req.body;

    try {
        const user = await User.findOne({ phoneNumber });
        if (!user) return res.status(400).send('User not found.');

        // Check OTP validity
        if (user.otp !== otp || Date.now() > user.otpExpires) {
            return res.status(400).send('Invalid or expired OTP.');
        }

        // Generate JWT
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ 
            success:true,
            msg:"OTP Verified Successfully",
            token:token
         });
    } catch (error) {
        res.status(500).send('Error signing in.');
    }
});

module.exports = router;
