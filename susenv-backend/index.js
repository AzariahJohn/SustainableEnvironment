const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser')

// "const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "vithackathonsusenv@gmail.com",
//         pass: process.env.MAIL_PASSWORD,
//     },
//     port: 465,
//     host: 'smtp.gmail.com'
// })"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server startes on port: ${PORT}`)
});

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MDB_CONNECT, (err) => {
    if (err) return console.log(err);
    console.log("connected to DB")
});

// "const msgOpt = {
//     from: 'vithackathonsusenv@gmail.com',
//     to: 'azariah1200@gmail.com',
//     subject: 'Hey there',
//     text: "this is sample",
// }

// app.post("/msg", async(req, res) => {
//     transporter.sendMail(msgOpt)
// })

app.use("/auth", require("./routers/userRouter"));
app.use("/agg", require("./routers/aggregatorRoute"));
app.use("/loan", require("./routers/loanRouter"));