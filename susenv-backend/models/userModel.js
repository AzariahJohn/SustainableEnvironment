const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   name: {type: String, required: true},
   email: {type: String, required: true},
   phoneNumber: {type: String, required: true}, 
   income: [{source: String, value: Number}],
   spend: [{for: String, value: Number}],
   Invoice: [{for: String, value: Number}],
   grossIncome: [{value: Number}],
   taxPercent: [{value: Number}],
   taxReturn: [{value: Number}],
});

const User = mongoose.model("user", userSchema);
module.exports = User;