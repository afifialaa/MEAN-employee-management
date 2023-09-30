const Employee = require('../database/models/employee-model');


/**
 * Creates a new employee
 * @param {*} req 
 * @param {*} res 
 */
function createEmployee (req, res) {
    let employeeObj = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone_number: req.body.phoneNumber,
        gender: req.body.gender,
        university: req.body.university,
        job_title: req.body.jobTitle,
        department: req.body.department,
        address: {
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

    Employee.create(employeeObj)
        .then(()=> res.status(201).json({msg: 'Employee was created'}))
        .catch((error)=> {
            if(error.code === 11000 && JSON.stringify(error.keyPattern) === JSON.stringify({ email: 1 })) {
                return res.status(409).json({msg: 'This email is already used'})
            }else if(error.code === 11000 && JSON.stringify(error.keyPattern) === JSON.stringify({ phone_number: 1 })) {
                return res.status(409).json({msg: 'This phone number is already used'})
            }
            res.status(409).json({msg: 'Failed to create employee'})
        })
}

/**
 * Search employees
 * @param {*} req 
 * @param {*} res 
 */
function queryEmployee(req, res) {
    let query = req.query

    Employee.query(query)
        .then(employees => res.status(200).json({employees: employees}))
        .catch(error => res.status(404).json({msg: 'Failed to fetch employees'}))
}

/**
 * Update employee
 * @param {*} req 
 * @param {*} res 
 */
function updateEmployee (req, res) {

    let employeeObj = {
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

    Employee.updateEmployee(employeeObj)
        .then(()=>res.status(201).json({msg: 'Employee was updated successfully'}))
        .catch(()=>res.status(404).json({ msg: 'Failed to update employee' }))

}


/**
 * Delete employee
 * @param {*} req 
 * @param {*} res 
 */
function deleteEmployee (req, res) {
    let employee = { _id: req.query.id }

    Employee.deleteEmp(employee)
        .then(()=> {
            res.status(200).json({msg: 'Employee was deleted successfully'})
        })
        .catch((error)=>{
            if(error == 404) return res.status(404).json({msg: 'Employee not found'})

            return res.status(409).json({msg:'Failed to delete employee'})
        })

}

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    queryEmployee,
}

