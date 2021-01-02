const Employee = require('../models/employee.model');
const User = require('../models/user.model');

let DebugDashboard = require('debug')('worker:dashboard');

function getEmployeesNum(req, res){
	DebugDashboard('Getting employees count');
	Employee.countDocuments({}, (err, result)=>{
		if(err) {
			DebugDashboard(err);
			return res.json({err : 'There was an error'});
		}

		DebugDashboard('Returning employee count');
		return res.json({number : result});
	});
}

function getUsersNum(req, res){
	DebugDashboard('Getting user count');
	User.countDocuments({}, (err, result)=>{
		if(err) {
			DebugDashboard(err);
			return res.json({err : 'there was an error'});
		}

		DebugDashboard('Returning user count');
		return res.json({number:result});
	});
}

function getDepartmentsNum(req, res){
	DebugDashboard('Returning department count');
    return res.json({number:2});
}

module.exports = {
    getEmployeesNum,
    getDepartmentsNum,
    getUsersNum
}
