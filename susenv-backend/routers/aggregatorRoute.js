const router = require("express").Router();
const auth = require('../midleware/auth');
const User = require("../models/userModel");

router.get("/account-data", auth, async(req, res) => {
    try{
        userId = req.user;
        const ExistingUser = await User.findOne({userId})
        res.json(ExistingUser)
    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

module.exports = router;