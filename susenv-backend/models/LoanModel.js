const mongoose = require("mongoose");
const LoanSchema = new mongoose.Schema({
    userId: [{type: String}],
    userEmail: [{type: String}],
    loanAmount: [{type: Number}],
})

const LoanAmount = mongoose.model("loanAmount", LoanSchema);
module.exports = Customer;