const mongoose = require('mongoose');

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
    phone_number: {
        type:String,
        required: true
    },
    gender: {
        type:String,
        required: true
    },
    job_title: {
        type:String,
        required: true
    },
    department: {
        type:String,
        required: false
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type:String,
        required:false
    },
    street_address: {
        type:String,
        required: false
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
