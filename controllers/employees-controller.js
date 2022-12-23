const repository = require('../database/repository/employee-repository')

async function createEmployee(req, res) {

    let employee = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone_number: req.body.phoneNumber,
        gender: req.body.gender,
        university: req.body.university,
        job_title: req.body.jobTitle,
        address: {
            department: req.body.department,
            country: req.body.country,
            city: req.body.city,
            street_address: req.body.address,
        },
        contract: {
            hiring_date: req.body.hiringDate,
            terminating_date: req.body.terminatingDate,
            bank: req.body.bank,
            bank_account: req.body.bankAccount,
            salary: req.body.salary
        }
    }

    repository.createEmployee(employee).then(
        (data)=> {
            return res.status(200).json({msg: 'Employee was created'})
        }, 
        (error) => {
            if(error.code == 11000 && error.keyPattern['email'] == 1){
                return res.status(400).json({msg: 'Employee already exists'})
            }
            if(error.code == 11000 && error.keyPattern['phone_number'] == 1){
                return res.status(400).json({msg: 'Phone number already exists'})
            }
            return res.status(500).json({msg: 'Failed to create employee'})
        }
    )

}

async function readEmployee(req, res) {
    let query = {
        email: req.query.email
    }

    repository.readEmployee(query).then(
        (data)=>{
            return res.status(200).json({employee: data})
        },
        (error)=> {
            return res.status(404).json({msg: 'Employee was not found'})
        }
    )
}

async function updateEmployee(req, res) {
    let employee = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phoneNumber,
        job_title: req.body.jobTitle,
        department: req.body.department,
        university: req.body.university,
        address: {
            country: req.body.country,
            city: req.body.city,
            street_address: req.body.street,
        },
        contract: {
            hiring_date: req.body.hiringDate,
            terminating_date: req.body.terminatingDate,
            bank: req.body.bank,
            bank_account: req.body.bankAccount,
            salary: req.body.salary
        }

    }

    repository.updateEmployee(employee).then(
        (data)=> {
            return res.status(200).json({employee: data})
        },
        (error)=>{
            return res.status(500).json({})
        }
    )

}

async function deleteEmployee(req, res) {

    let query = {
        email: req.query.email
    }

    repository.deleteEmployee(query).then(
        (data)=>{
            return res.status(200).json({msg: 'Employee was deleted'})
        },
        (error) => {
            if(error == 404){
                return res.status(404).json({msg: 'Employee not found'})
            }
            return res.status(500).json({msg: 'Failed to delete employee'})
        }
    )

}

async function readEmployees(req, res){
    let query = req.query

    repository.query(query).then(
        (data)=>{
            return res.status(200).json({data})
        }, (error)=>{
            return res.status(200).json({msg: 'Failed to search'})
        }
    )

}

module.exports = {
    createEmployee,
    readEmployee,
    updateEmployee,
    deleteEmployee,
    readEmployees
}