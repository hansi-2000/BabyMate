const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    childeName: { type: String, required: true },
  
  // other fields...
});

const Customer = mongoose.model('customers', userSchema);


module.exports={Customer};