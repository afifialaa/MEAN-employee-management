const Employee = require('../models/employee.model');

// Search by email.
function searchByEmail(req, res){
	  console.log('searching my email');
	  Employee.findOne({email:req.query.email}, function(err, employee){
		    if(err) {
				console.log(err);
				res.json({msg: "database is currently offline"});
		    }
		    console.log(employee);
		    if (employee == null){
				console.log('not employee found with this email');
				res.json({msg: "no employee found with this email"});
		    }else{
				res.json(employee);
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
        empId: req.body.empId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
        governorate: req.body.governorate,
        gender: req.body.gender,
        jobTitle: req.body.jobTitle
    }
    
    let employee = new Employee(employeeObj);

    employee.save(function(err, employee){
        if(err) console.log(err);
        else{
            console.log('employee was added');
            res.send();
        }
        res.send();
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

    Employee.updateOne({email: req.body.email}, employeeObj, function(err){
        if(err){
            console.log(err);
        }
        res.json({'msg':'data was updated'});
    })
}

// Searching by gender
function searchByGender(req, res){
    let gender = req.query.gender;
    Employee.find({gender:gender}, (err, emp)=>{
        if(err) console.log(err);

        console.log(emp);
        res.json(emp);
    })
}

// Searching by firstName
function searchByFirstName(req, res){
    let firstName = req.query.firstName;
    Employee.find({first_name:firstName}, (err, emp)=>{
        if(err) console.log(err);

        res.json(emp);
    })
}

// Searching by firstName
function searchByLastName(req, res){
    let lastName = req.query.lastName;
    Employee.find({last_name:lastName}, (err, emp)=>{
        if(err) console.log(err);

        res.json(emp);
    })
}

// Delete employee
function deleteEmployee(req, res){
    Employee.findOneAndDelete({email: req.body.email}, function(err){
        if(err){
            console.log(err);
        }else{
            res.send('employee was deleted');
        }
    })
}

function searchByJobTitle(req, res){
    let jobTitle = req.query.jobTitle;

    Employee.find({job_title:jobTItle}, function(err, emp){
        if (err){
            console.log(err);
        }else{
            res.json(emp);
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

