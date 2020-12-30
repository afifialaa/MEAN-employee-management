const mongoose = require('mongoose');
const jobs = require('../models/jobs');
const countries = require('../models/countries');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "First name cannot be empty"],
        lowercase: true

    },
    last_name: {
        type: String,
        required: [true, "Last name cannot be empty"],
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email cannot be empty"],
        lowercase: true
    },
    phone_number: {
        type:String,
        unique: true,
        required: [true, "Phone number cannot be empty"],
        lowercase: true
    },
    gender: {
        type:String,
        required: [true, "Gender cannot be empty"],
    },
    job_title: {
        type:String,
        enum: jobs,
        required: [true, "Job title cannot be empty"],
        lowercase: true
    },
    department: {
        type:String,
        required: false,
        lowercase: true
    },
    country: {
        type: String,
        enum: countries,
        required: true,
        // removed lowercase validator
    },
    city: {
        type:String,
        required:false,
        lowercase: true,
    },
    street_address: {
        type:String,
        required: false,
        lowercase: true,
    },
    university: {
        type:String,
        required: false
    },
    salary: {
        type: Number,
        required: false
    }
});

const Employee = mongoose.model('employees', EmployeeSchema);

module.exports = Employee;
