const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true 
    },
    otherId: {
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
});

module.exports = mongoose.model('Record', recordSchema);
