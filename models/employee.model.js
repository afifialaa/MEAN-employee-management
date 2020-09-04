const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type:String,
        required: true
    },
    job_title: {
        type:String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone_number: {
        type:String,
        required: true
    },
});

const Employee = mongoose.model('employees', EmployeeSchema);

module.exports = Employee;
