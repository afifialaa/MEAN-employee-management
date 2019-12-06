const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig');
const jwt = require('jsonwebtoken');

const bc = require('bcrypt');
var saltRounds = 10;

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    empId:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: String,
    phoneNumber: String,
    country: String,
    governorate: String,
    gender: String,
    jobTitle: String
});

/*EmployeeSchema.pre('save', function(next){
    let employee = this;

    bc.genSalt(saltRounds, (err, saltRounds)=>{
        if(err) return next(err);


        bc.hash(employee.password, saltRounds, (err, hash)=>{
            //create hashed password
            if(err) return next(err);

            employee.password = hash;
            next();
        })
    })
})*/

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;