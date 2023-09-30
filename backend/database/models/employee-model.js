const mongoose = require('mongoose')

const jobs = require('./jobs')
const addressSchema = require('./address.schema')
const contractSchema = require('./contract.schema')
const TaskSchema = require('./task.schema')

const Schema = mongoose.Schema

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

    address: addressSchema,

    university: {
        type:String,
        required: false
    },

    contract: contractSchema,
})

EmployeeSchema.statics.create = (employeeObj) => {
    return new Promise((resolve, reject)=> {
        let employee = new Employee(employeeObj);
        employee.save((err, result)=>{
            if(err) reject(err)

            resolve()
        })
    })
}

EmployeeSchema.statics.query = (query)=>{
    return new Promise( (resolve, reject)=>{
        Employee.find(query, (err, employees)=>{
            if(err) reject(err)

            resolve(employees)
        })
    })
}

EmployeeSchema.statics.updateEmployee = (employee) => {
    return new Promise((resolve, reject)=>{
        Employee.updateOne({email: employee.email}, employee, (err)=>{
            if(err) reject(err)

            resolve()
        })
    })
}

EmployeeSchema.statics.deleteEmp = (employee) => {
    return new Promise((resolve, reject)=>{
        Employee.deleteOne(employee, (err, result)=>{
            if(err) {
                reject(err)
            } else if(result.deletedCount == 0){reject(404)}
            
            resolve()
        })

    })
}

const Employee = mongoose.model('employees', EmployeeSchema)

module.exports = Employee
