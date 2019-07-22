const express = require('express')
var router = express.Router();

const Employee = require('../models/employee.model');

//testing route
router.get('/test', function(req, res){
    console.log('test works fine');
})

//search by email
router.get('/searchByEmail', function(req, res){
    console.log('search email was touched');
    console.log(req.query.email);

    Employee.findOne({email:req.query.email}, function(err, employee){
        if(err) console.log(err);
        console.log(employee);
        res.json(employee);
    })
})

//search by id
router.get('/searchById', function(req, res){
    console.log('search by id was recieved');
    console.log(req.query.id);
    res.send();
})

//add employee
router.post('/addEmp', function(req, res){
    console.log('addEmp was touched');
    console.log(req.body);
    var employeeObj = {
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
    
    var employee = new Employee(employeeObj);

    employee.save(function(err, employee){
        if(err) console.log(err);
        else{
            console.log('employee was added');
            res.send();
        }
        res.send();
    });
})

router.post('/updateEmployee', function(req, res){
    console.log('update emp was touched');

    var employeeObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle
    };

    Employee.updateOne({email: req.body.email}, employeeObj, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('employee updated');
        }
    })
})

router.post('/deleteEmployee', function(req, res){
    console.log('delete employee was touched');

    var employee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle
    }

    Employee.findOneAndDelete({email: req.body.email}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('employee was deleted');
        }
    })
})

module.exports = router;