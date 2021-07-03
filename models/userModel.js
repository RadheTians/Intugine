const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    lowercase: true,
    unique: true,
    minlength: 6,
    maxlength: 12,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    minlength: 2,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  name: {
    type: String,
    default: ''
  },
  contact: {
    type: Number,
    length: [10, 'Please provide 10 digit contact number']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
  },
  paymentRecord: [{
    id: {
      type: String,
      required: true 
    },
    name: {
        type: String,
        required: true
    },
    amount: {
      type: Number,
      required: true
    },
  }],
});


const User = mongoose.model('User', userSchema);

module.exports = User;
