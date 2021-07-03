const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    userId :{
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    expense: {
        type: String,
        required: true
    },
    totalAmount: { 
        type: Number, 
        required: true,
    },
    count: { 
        type: Number, 
        required: true,
    },
    totalShare: [{
        id: {
          type: String,
          required: true 
        },
        name: {
            type: String,
            required: true
        },
        share: {
          type: Number,
          required: true
        },
        amount: {
          type: Number,
          required: true
        },
    }],
    bookingTime: {
        type: Date,
        default: Date.now
    },
});

module.exports =  mongoose.model('Expense', expenseSchema);
