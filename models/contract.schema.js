const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractSchema = new Schema({
    hiring_date: {
        type: Date,
        required: false       
    },
    terminating_date: {
        type: String,
        required: false
    },
    salary: {
        type: Number,
        required: false
    },
    bank_account: {
        type: String,
        required: false
    },
    bank: {
        type: String,
        required: false
    }
});

module.exports = contractSchema
