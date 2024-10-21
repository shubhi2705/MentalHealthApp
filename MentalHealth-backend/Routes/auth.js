const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const otpGenerator = require('otp-generator');
const User = require('../Models/User');
const config=require('dotenv').config();
const router = express.Router();
const sgMail = require('@sendgrid/mail');



const accountSId=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER= process.env.TWILIO_PHONE_NUMBER
const JWT_SECRET= process.env.JWT_SECRET
const TWILIO_SENDGRID_APIKey=process.env.TWILIO_SENDGRID_APIKey
const twilioClient = twilio(accountSId,authToken);
const nodemailer = require("nodemailer");
sgMail.setApiKey(TWILIO_SENDGRID_APIKey);

router.get('/send-email',async(req,res)=>{
    const msg = {
        to: 'shubhisinghal164@gmail.com', // Recipient email address
        from: 'shubhisinghal2705@GMAIL.COM', // Your verified sender email address
        subject: 'YouMatter-Request for Mental Health Assistance',
        text: `Dear Receiver,
  
        My name is John Doe, and I am reaching out on behalf of my friend, Robin. Robin is currently experiencing mental health challenges, including severe anxiety and depression, which have significantly impacted his daily life and well-being.
        
        We are seeking assistance and guidance from your organization regarding available resources, support programs, or counseling services. John has expressed a strong desire to find help and improve his situation.
        
        We appreciate any help you can provide and look forward to your response. Thank you for the important work you do in supporting individuals facing mental health challenges.
        
        Best regards,
        John Doe`, // You can also use HTML for a richer format
            html: `<p>Dear Receiver,</p>
        <p>My name is John Doe, and I am reaching out on behalf of my friend, Robin. John is currently experiencing mental health challenges, including severe anxiety and depression, which have significantly impacted his daily life and well-being.</p>
        <p>We are seeking assistance and guidance from your organization regarding available resources, support programs, or counseling services. John has expressed a strong desire to find help and improve his situation.</p>
        <p>We appreciate any help you can provide and look forward to your response. Thank you for the important work you do in supporting individuals facing mental health challenges.</p>
        <p>Best regards,<br>
        John Doe<br></p>`
      };
    
      try {
          const response = await sgMail.send(msg);
          console.log('Email sent successfully:', response);
          res.status(201).json({
            success:true,
            msg:`Email sent Successfully!`
        });
       
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success:false,
            msg:error.message
         });
        if (error.response) {
          console.error(error.response.body);
        }
      }
    
})


router.put('/update-otp',async(req,res)=>{
    const {phNumber,otp}=req.body;
    try{
       const user=new User({phoneNumber:phNumber});
       await User.findOneAndUpdate(
        {phoneNumber:phNumber},
        {otp},
        {upsert:true, new:true,setDefaultsOnInsert:true}
    );

    res.status(201).json({
        success:true,
        msg:`OTP updated Successfully!`
    });
   
} catch (error) {
    res.status(500).json({
       success:false,
       msg:error.message
    });
}
})
router.post('/signup', async (req, res) => {
    const { phNumber,name,email,areasOfInterest,gender,dob } = req.body;
    try { 
        const otp = otpGenerator.generate(6, { upperCase: true, specialChars: false });
        const user = new User({name:name,email:email,gender:gender, areasOfInterest:areasOfInterest,phoneNumber:phNumber,dob:dob,otp:otp});

        await User.findOneAndUpdate(
            {phoneNumber:phNumber},
            {name,email,gender,dob,areasOfInterest,otp},
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
