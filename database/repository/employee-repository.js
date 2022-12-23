const Employee = require('../models/employee-model')

function createEmployee(employee) {

    return new Promise((resolve, reject) => {

        let employeeObj = new Employee(employee)

        employeeObj.save((err, result) => {
            if (err) {
                reject(err)
            }

            resolve()
        })

    })
}

function readEmployee(query) {

    return new Promise((resolve, reject) => {

        Employee.findOne(query, (err, result) => {
            if (err) {
                console.log(err)
                reject()
            }

            if (result == null) {
                reject()
            }

            resolve(result)
        })

    })

}

function updateEmployee(employee) {

    return new Promise((resolve, reject) => {

        Employee.updateOne({ email: employee.email }, employee, (err) => {
            if (err) {
                reject()
            }
            resolve(employee)
        })
    })

}

function deleteEmployee(query) {

    return new Promise((resolve, reject) => {

        Employee.findOneAndDelete(query, (err, emp) => {
            if (err) {
                reject()
            }
            if (emp == null) {
                reject(404)
            }
            resolve()

        })
    })

}

function query(query) {
    return new Promise((resolve, reject) => {
        Employee.find(query, (err, res) => {
            if(err){
                reject()
            }
            resolve(res)
        })
    })

}

module.exports = {
    createEmployee,
    readEmployee,
    updateEmployee,
    deleteEmployee,
    query
}