const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const countries = require('../models/countries');

const addressSchema = new Schema({
    country: {
        type: String,
        enum: countries,
        required: true       
    },
    city: {
        type: String,
        required: true,
        lowercase: true
    },
    district: {
        type: String,
        required: false,
        lowercase: true
    },
    street_address: {
        type: String,
        required: false,
        lowercase: true
    },
    building_num: {
        type: Number,
        required: false
    }
})

module.exports = addressSchema;