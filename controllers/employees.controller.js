const Employee = require('../models/employee.model');

/* Debugging */
let debugEmp = require('debug')('worker:debugEmp');

/**
 * Creates a new employee
 * @param {*} req 
 * @param {*} res 
 */
function createEmployee (req, res) {
    debugEmp('Adding employee');
    let employeeObj = {
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

    debugEmp('EmployeeObj: ', employeeObj);

    let employee = new Employee(employeeObj);

    employee.save((err, employee) => {
        if (err) {
            console.log(err);
            return res.status(409).json({msg: 'Failed'});
        }
        debugEmp('Employee was added successfully');
        return res.status(201).json({msg: 'Employee was created'});
    });
}

/**
 * Search employees
 * @param {*} req 
 * @param {*} res 
 */
function readEmployees(req, res) {
    console.log(req.query)
    Employee.find(req.query, (err, result)=>{
        if(err) return res.status(500).json({msg: "Failed to search"})

        return res.status(200).json({employees: result})
    })
}

function readEmployee(req, res){
    let email = req.params.email
    Employee.findOne({email: email}, (err, result)=>{
        if(err) return res.status(500).json({msg: "Failed to search"})

        return res.status(200).json({employee: result})
    })
}

/**
 * Update employee
 * @param {*} req 
 * @param {*} res 
 */
function updateEmployee (req, res) {

    debugEmp('Updating employee');

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

    };

    /*const update = {
        "$set": {
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
    };*/

    debugEmp('employeeObj: ', employeeObj);

    Employee.updateOne({ email: employeeObj.email }, employeeObj, (err) => {
        if (err) {
            debugEmp(err);
            return res.status(404).json({ msg: 'Failed to update employee' });
        }
        debugEmp('User was updated');
        return res.status(200).json({ msg: 'user was updated' });
    })
}


/**
 * Delete employee
 * @param {*} req 
 * @param {*} res 
 */
function deleteEmployee (req, res) {
    Employee.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(409).json({ msg: 'failed to delete employee' });
        }else{
            return res.status(200).json({ msg: 'employee was deleted' });
        }
    });
}

/**
 * Search by id
 * @param {*} req 
 * @param {*} res 
 */
function readEmployeeId (req, res) {
    Employee.findOne({ empId: req.query.empId }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ msg: 'Failed to search for employee.' })
        }
        return res.status(200).json({ emp });
    })
}

module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    readEmployees,
    readEmployee
};

