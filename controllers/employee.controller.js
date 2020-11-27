const Employee = require('../models/employee.model');

// Search by email.
function searchByEmail(req, res){
	  console.log('searching my email');
	  Employee.findOne({email:req.query.email}, function(err, employee){
		    if(err) {
				console.log(err);
				return res.json({err: "database is currently offline"});
		    }
		    if (employee == null){
				console.log('not employee found with this email');
				return res.json({msg: "no employee found with this email"});
		    }else{
				return res.json(employee);
		    }
	  })
}

// Search by id.
function searchById(req, res){
    Employee.findOne({empId:req.query.empId}, function(err, emp){
        if(err) console.log(err);
        res.json(emp);
    })
}

// Add employee.
function addEmp(req, res){
    let employeeObj = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone_number: req.body.phoneNumber,
        university: req.body.university,
        country: req.body.country,
        city: req.body.city,
        street_address: req.body.address,
        gender: req.body.gender,
        job_title: req.body.jobTitle,
        department: req.body.department
    }
    
    let employee = new Employee(employeeObj);

    employee.save((err, employee)=>{
        if(err) {
            console.log(err);
            return res.json({err: 'failed to add employee'});
        }
        return res.json({msg: 'empployee was added successfully'});
    });
}

//update employee
function updateEmployee(req, res){

    let employeeObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle
    };

    Employee.updateOne({email: req.body.email}, employeeObj, (err) => {
        if(err){
            console.log(err);
            return res.json({err: 'failed to update employee'});
        }
        res.json({'msg':'data was updated'});
    })
}

// Searching by gender
function searchByGender(req, res){
    let gender = req.query.gender;
    Employee.find({gender:gender}, (err, emp)=>{
        if(err) {
            console.log(err);
            return res.json({err :'failed to search for employee'});
        }
        return res.json(emp);
    })
}

// Searching by firstName
function searchByFirstName(req, res){
    let firstName = req.query.firstName;
    Employee.find({first_name:firstName}, (err, emp)=>{
        if(err) {
            console.log(err);
            return res.json({err:'failed to search for employee'});
        }
        return res.json(emp);
    })
}

// Searching by firstName
function searchByLastName(req, res){
    let lastName = req.query.lastName;
    Employee.find({last_name:lastName}, (err, emp)=>{
        if(err) {
            console.log(err);
            return res.json({err: 'failed to search for employee'});
        }
        return res.json(emp);
    })
}

// Delete employee
function deleteEmployee(req, res){
    Employee.findOneAndDelete({email: req.body.email}, (err)=>{
        if(err){
            console.log(err);
            return res.json({err :'failed to delete employee'});
        }else{
            return res.json({msg: 'employee was deleted'});
        }
    })
}

function searchByJobTitle(req, res){
    let jobTitle = req.query.jobTitle;

    Employee.find({job_title:jobTitle}, (err, emp)=>{
        if (err){
            console.log(err);
            return res.json({err :'failed to search for empliyee'});
        }else{
            return res.json(emp);
        }
    })
}

module.exports = {
    searchByEmail,
    searchById,
    addEmp,
    deleteEmployee,
    updateEmployee,
    searchByGender,
    searchByFirstName,
    searchByLastName
};

