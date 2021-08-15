const Employee = require('../models/employee.model');
const User = require('../models/user.model');
const Task = require('../models/tasks.model');

let debugDashboard = require('debug')('worker:dashboard');

function getEmployeesNum (req, res){
	debugDashboard('Getting employees count');
	Employee.countDocuments({}, (err, result)=>{
		if(err) {
			debugDashboard(err);
			res.setHeader('Content-Type', 'application/json');
			return res.status(404).json({err : 'There was an error'});
		}

		debugDashboard('Returning employee count');
		res.setHeader('Content-Type', 'application/json');
		return res.status(200).json({number : result});
	});
}

function getUsersNum (req, res) {
	debugDashboard('Getting user count');
	User.countDocuments({}, (err, result)=>{
		if(err) {
			debugDashboard(err);
			res.setHeader('Content-Type', 'application/json');
			return res.stattus(404).json({err : 'there was an error'});
		}

		debugDashboard('Returning user count');
		res.setHeader('Content-Type', 'application/json');
		return res.status(200).json({number:result});
	});
}

function getDepartmentsNum (req, res) {
	debugDashboard('Returning department count');
    return res.status(200).json({number:2});
}

function getTasksNum (req, res){
	debugDashboard('Getting tasks count');
	debugDashboard('email ', req.email);
	Task.countDocuments({user: req.email}, (err, result)=>{
		if(err) {
			debugDashboard(err);
			res.setHeader('Content-Type', 'application/json');
			return res.status(404).json({msg : 'there was an error'});
		}

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
