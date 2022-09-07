const fast2sms = require('fast-two-sms');
const router = require("express").Router();
const User = require("../models/userModel");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
let token = "";
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "vithackathonsusenv@gmail.com",
        pass: process.env.MAIL_PASSWORD,
    },
    port: 465,
    host: 'smtp.gmail.com'
})

const val = Math.floor(1000 + Math.random() * 9000);

router.post("/otplogin", async(req, res) => {
    if (val.toString() === req.body.otp) {
        res.cookie("token", token, {
            httpOnly: true
        }).send("Signed In Successfully");
    } else {
        console.log("Wrong OTP try again");
    }
    // console.log(req.body)
})

router.post("/otpsignup", async(req, res) => {
    if (val.toString() === req.body.otp) {

        res.cookie("token", token, {
            httpOnly: true
        }).send("Account Created");

    } else {
        res.send("wrong OTP try again");
    }
    // console.log(req.body)
})

router.post("/signup", async (req, res) => {

    try{
        const {name, email, phoneNumber} = req.body;

        const existingPhno = await User.findOne({phoneNumber});
        const existingUser = await User.findOne({email})

        if(existingUser || existingPhno){
            return res.status(400).json({
                errorMessage: "An account already exist",
            });
        } else {

            // create an account and send a response with "Send Otp"

            const msgOpt = {
                from: 'vithackathonsusenv@gmail.com',
                to: `${email}`,
                subject: "One Time Password",
                text: `your OTP is ${val}`,
            }

            transporter.sendMail(msgOpt)

            const newUser = new User({
                name, email, phoneNumber
            })
            const savedUser = await newUser.save()

            token = jwt.sign(
                {
                    user: savedUser._id,
                },
                process.env.JWT_SECRET
            );

            // res.cookie("token", token, {
            //     httpOnly: true
            // }).send("Check your mail for OTP");
            
            res.status(200).send(`OTP Has been sent to your email ${email} Mr.${name}`);
        }
    }
    catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

// Login operations

router.post("/login", async(req, res) => {

    token = "";

    try{
        const email = req.body.email;
        const existingUser = await User.findOne({email});

        if (existingUser) {

            const msgOpt = {
                from: 'vithackathonsusenv@gmail.com',
                to: `${email}`,
                subject: "One Time Password",
                text: `your OTP is ${val}`,
            }

            transporter.sendMail(msgOpt)
            token = jwt.sign(
                {
                    user: existingUser._id,
                },
                process.env.JWT_SECRET
            );
            
            res.send("OTP Sent to email");

        } else {
            return res.status(400).json({
                errorMessage: "Invalid email Id Please Signup",
            });
        }

    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

router.get('/logout', (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
})

module.exports = router;