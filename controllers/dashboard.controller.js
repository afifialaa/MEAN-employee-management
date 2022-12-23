const Employee = require('../../database/models/employee.model');
const User = require('../../database/models/user.model');
const Task = require('../../database/models/tasks.model');


function getEmployeesNum (req, res){
	Employee.countDocuments({}, (err, result)=>{
		if(err) {
			return res.status(404).json({err : 'There was an error'});
		}

		return res.status(200).json({number : result});
	});
}

function getUsersNum (req, res) {
	User.countDocuments({}, (err, result)=>{
		if(err) {
			return res.status(404).json({err : 'there was an error'});
		}
		return res.status(200).json({number:result});
	});
}

function getDepartmentsNum (req, res) {
    return res.status(200).json({number:2});
}

function getTasksNum (req, res){
	Task.countDocuments({user: req.email}, (err, result)=>{
		if(err) {
			return res.status(404).json({msg : 'there was an error'});
		}

		return res.status(200).json({number:result});
	});
}

module.exports = {
    getEmployeesNum,
    getDepartmentsNum,
    getUsersNum,
	getTasksNum
}
