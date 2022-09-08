const mongoose = require("mongoose");
const LoanSchema = new mongoose.Schema({
    userId: {type: String},
    amount: {type: Number},
})

const LoanAmount = mongoose.model("loanAmount", LoanSchema);
module.exports = LoanAmount;