const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ftm = require('fast-two-sms')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server startes on port: ${PORT}`)
});

app.use(express.json());

app.get("/test", (req, res) => {
    res.send("hello it works");
});

mongoose.connect(process.env.MDB_CONNECT, (err) => {
    if (err) return console.log(err);
    console.log("connected to DB")
});

app.post("/message", async(req, res) => {
    await ftm.sendMessage({authorization: process.env.MESSAGE_API_KEY, message: "hello there", numbers: ['+91-9345987246']});
    res.send("fine")
})

app.use("/auth", require("./routers/userRouter"));