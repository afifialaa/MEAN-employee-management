const Employee = require('../models/employee.model');

/* Debugging */
let debugEmp = require('debug')('worker:debugEmp');

/**
 * Creates a new employee
 * @param {*} req 
 * @param {*} res 
 */
function addEmp (req, res) {
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
    debugEmp('Deleting user');
    Employee.findOneAndDelete({ email: req.body.email }, (err) => {
        if (err) {
            debugEmp('User was updated');
            return res.status(409).json({ msg: 'failed to delete employee' });
        }
        debugEmp('User was updated');
        return res.status(204).json({ msg: 'employee was deleted' });
    });
}

/**
 * Search by id
 * @param {*} req 
 * @param {*} res 
 */
function searchById (req, res) {
    Employee.findOne({ empId: req.query.empId }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ msg: 'Failed to search for employee.' })
        }
        return res.status(200).json({ emp });
    })
}

/**
 * Search by first name
 * @param {*} req 
 * @param {*} res 
 */
function searchByFirstName  (req, res) {
    Employee.find({ first_name: req.query.firstName }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(409).json({ msg: 'Failed to search for employee.' });
        }
        return res.status(200).json({ emp });
    });
}

/**
 * Search by last name
 * @param {*} req 
 * @param {*} res 
 */
function searchByLastName(req, res) {
    Employee.find({ last_name: req.query.lastName }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.json({ msg: 'Failed to search for employee.' });
        }
        return res.json({ emp });
    });
}


/**
 * Search by email
 * @param {*} req 
 * @param {*} res 
 */
const searchByEmail = (req, res) => {
    debugEmp('searching by email');
    Employee.findOne({ email: req.query.email }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(502).json({ msg: "Database is currently offline." });
        }
        if (emp == null) {
            return res.status(404).json({ msg: "No employee found with this email." });
        }
        debugEmp(emp);
        return res.status(200).json({ emp });
    });
}

/**
 * Search by gender
 * @param {*} req 
 * @param {*} res 
 */
function searchByGender (req, res) {
    debugEmp('Searching by gender');
    Employee.find({ gender: req.query.gender }, (err, emp) => {
        if (err) {
            debugEmp(err);
            return res.json({ msg: 'Failed to search for employee.' });
        }

        debugEmp('Return results');
        return res.json({ emp });
    });
}


/**
 * Search by job title
 * @param {*} req 
 * @param {*} res 
 */
function searchByJobTitle (req, res) {
    Employee.find({ job_title: req.query.jobTitle }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ msg: 'Failed to search for empliyee.' });
        }
        return res.status(200).json({ emp });
    });
}


/**
 * Search by country
 * @param {*} req 
 * @param {*} res 
 */
function searchByCountry (req, res){
    Employee.find({ country: req.query.country }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ msg: 'Failed to search for empliyee.' });
        }
        return res.status(200).json({ emp });
    });
}


/**
 * Search by city
 * @param {*} req 
 * @param {*} res 
 */
function searchByCity (req, res) {
    Employee.find({ city: req.query.city }, (err, emp) => {
        if (err) {
            return res.status(404).json({ msg: 'Failed to search for employee.' });
        }
        return res.json({ emp });
    });
}


/**
 * Search by department
 * @param {*} req 
 * @param {*} res 
 */
function searchByDepartment (req, res) {
    Employee.find({ department: req.query.department }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ msg: 'Failed to search for employee.' });
        }
        return res.status(200).json({ emp });
    });
}

/**
 * Search by university
 * @param {*} req 
 * @param {*} res 
 */
function searchByUniversity (req, res) {
    Employee.find({ university: req.query.university }, (err, emp) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ msg: 'Failed to search for employee.' });
        }
        return res.status(200).json({ emp });
    });
}

module.exports = {

    addEmp,
    deleteEmployee,
    updateEmployee,

    searchById,
    searchByFirstName,
    searchByLastName,
    searchByEmail,
    searchByGender,
    searchByJobTitle,
    searchByCountry,
    searchByCity,
    searchByDepartment,
    searchByUniversity
};

