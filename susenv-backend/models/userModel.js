const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   name: {type: String, required: true},
   email: {type: String, required: true},
   passwordHash: {type: String, required: true},
   phoneNumber: {type: String, required: true}, 
   income: [{source: String, value: Number}],
   spend: [{for: String, value: Number}],
   Invoice: [{for: String, value: Number}],
   grossIncome: {type: Number, required: true},
   taxPercent: {type: Number, required: true},
   taxReturn: {type: Number, required: true},
});

const User = mongoose.model("user", userSchema);
module.exports = User;