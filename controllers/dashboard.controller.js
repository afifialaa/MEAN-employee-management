const Employee = require('../models/employee.model');
const User = require('../models/user.model');

let debugDashboard = require('debug')('worker:dashboard');

function getEmployeesNum(req, res){
	debugDashboard('Getting employees count');
	Employee.countDocuments({}, (err, result)=>{
		if(err) {
			debugDashboard(err);
			res.setHeader('Content-Type', 'application/json');
			return res.json({err : 'There was an error'});
		}

		debugDashboard('Returning employee count');
		res.setHeader('Content-Type', 'application/json');
		return res.send({number : result});
	});
}

function getUsersNum(req, res){
	debugDashboard('Getting user count');
	User.countDocuments({}, (err, result)=>{
		if(err) {
			debugDashboard(err);
			res.setHeader('Content-Type', 'application/json');
			return res.json({err : 'there was an error'});
		}

		debugDashboard('Returning user count');
		res.setHeader('Content-Type', 'application/json');
		return res.json({number:result});
	});
}

function getDepartmentsNum(req, res){
	debugDashboard('Returning department count');
    return res.json({number:2});
}

function getTasksNum(req, res){
	debugDashboard('Getting user count');
	User.countDocuments({email: req.email}, 'tasks',  (err, result)=>{
		if(err) {
			debugDashboard(err);
			res.setHeader('Content-Type', 'application/json');
			return res.json({err : 'there was an error'});
		}

		debugDashboard('Returning user count');
		res.setHeader('Content-Type', 'application/json');
		return res.status(200).json({number:result});
	});
}

module.exports = {
    getEmployeesNum,
    getDepartmentsNum,
    getUsersNum,
	getTasksNum
}
