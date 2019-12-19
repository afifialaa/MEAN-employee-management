const Employee = require('../models/employee.model');

//search by email
function searchByEmail(req, res){
    Employee.findOne({email:req.query.email}, function(err, employee){
        if(err) console.log(err);
        res.json(employee);
    })
}

//search by id
function searchById(req, res){
    Employee.findOne({empId:req.query.empId}, function(err, emp){
        if(err) console.log(err);
        res.json(emp);
    })
}

//add employee
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

    var employeeObj = {
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

//searching by gender
function searchByGender(req, res){
    Employee.find({gender:req.query.gender}, (err, emp)=>{
        if(err) console.log(err);

        res.json(emp);
    })
}

// delete employee
function deleteEmployee(req, res){
    Employee.findOneAndDelete({email: req.body.email}, function(err){
        if(err){
            console.log(err);
        }else{
            res.send('employee was deleted');
        }
    })
}

module.exports = {
    searchByEmail,
    searchById,
    addEmp,
    deleteEmployee,
    updateEmployee,
    searchByGender
};

