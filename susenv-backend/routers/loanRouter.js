const router = require("express").Router();
const LoanAmount = require("../models/LoanModel");
const auth = require('../midleware/auth')

router.post("/", auth, async(req, res) => {
    try {
        const {amount} = req.body;
        const userId = req.user;
        console.log(userId, amount);
        const loanAmount = new LoanAmount({
            userId, amount
        });

        const savedAmount = await loanAmount.save();
        res.json(savedAmount);

    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

router.get("/loan-data", auth, async(req, res) => {
    try{
        userId = req.user;
        const ExistingUser = await LoanAmount.findOne({userId})
        res.json(ExistingUser.amount)
    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
})

module.exports = router;