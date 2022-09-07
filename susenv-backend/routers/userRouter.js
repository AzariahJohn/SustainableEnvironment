const fast2sms = require('fast-two-sms');
const router = require("express").Router();
const User = require("../models/userModel");

router.post("/", async (req, res) => {
    try{
        const {name, email, phoneNumber} = req.body;
        const existingUser = await User.findOne({phoneNumber});
        if(existingUser){
            return res.status(400).json({
                errorMessage: "An account already exist",
            });
        }
    }
    catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

module.exports = router;