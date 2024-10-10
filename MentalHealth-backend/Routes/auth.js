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

const twilioClient = twilio(accountSId,authToken);

// Signup
router.post('/signup', async (req, res) => {
    const { phNumber, password,name,email,areasOfIntrest,gender } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
       // const otp = otpGenerator.generate(6, { upperCase: true, specialChars: false });
        const user = new User({name:name,email:email,gender:gender, areasOfIntrest:areasOfIntrest,phoneNumber:phNumber, password: hashedPassword});

        await User.findOneAndUpdate(
            {phoneNumber:phNumber},
            {name,email,gender,password},
            {upsert:true, new:true,setDefaultsOnInsert:true}
        );

        res.status(201).json({
            success:true,
            msg:`User created Successfully!`
        });
       
    } catch (error) {
        res.status(500).json({
           success:false,
           msg:error.message
        });
    }
});


router.post('/signin',async(req,res)=>{
    const {phoneNumber}=req.body;
    try{
        const user = await User.findOne({ phoneNumber });
        if (!user) return res.status(400).send('User not found.');
        const otp = otpGenerator.generate(6, { upperCase: true, specialChars: false });
        await twilioClient.messages.create({
            body: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
            from: TWILIO_PHONE_NUMBER,
            to: phoneNumber
        });

        await User.findOneAndUpdate(
            {phoneNumber},
            {otp, otpExpires:Date.now() + 300000},
            {upsert:false, new:true,setDefaultsOnInsert:true}
        );
       
        res.status(201).json({
            success:true,
            msg:`OTP Sent Successfully. Check your phone for OTP-${otp}`
        });
    }

    catch(error){
        res.status(500).json({
            success:false,
            msg:error.message
         });
    }
})

// Verify OTP and Signin
router.post('/verifyotp', async (req, res) => {
    const { phoneNumber, otp } = req.body;

    try {
        const user = await User.findOne({ phoneNumber });
        if (!user) return res.status(400).send('User not found.');

        // Check OTP validity
        if (user.otp !== otp || Date.now() > user.otpExpires) {
            return res.status(400).send('Invalid or expired OTP.');
        }
        res.status(200).json({ 
            success:true,
            msg:"OTP Verified Successfully"
         });
    } catch (error) {
        res.status(500).send('Error verifying OTP.');
    }
});


module.exports = router;
