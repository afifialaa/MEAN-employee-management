const Employee = require('../models/employee.model');
const User = require('../models/user.model');

function getEmployeesNum(req, res){
	Employee.count({}, (err, result)=>{
		if(err) return res.json({err : 'there was an error'});

		return res.json({number : result});
	});
}

function getUsersNum(req, res){
	User.count({}, (err, result)=>{
		if(err) return res.json({err : 'there was an error'});

		return res.json({number:result});
	});
}

function getDepartmentsNum(req, res){
    return res.json({number:2});
}

module.exports = {
    getEmployeesNum,
    getDepartmentsNum,
    getUsersNum
}
