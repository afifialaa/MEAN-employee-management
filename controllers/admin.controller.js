const Employee = require('../models/employee.model');
const LeaveApplication = require('../models/leaveApp.model');

function fetchEmployees(req, res) {
	Employee.find({}, function (err, employees) {
		if (err) {
			console.log('failed to fetch employees');
			res.json({ msg: 'failed to fetch employees' });
		}
		res.json({ employees });
	})
}

function fetchLeaveApplications(req, res) {
	LeaveApplication.find({}, function (err, requests) {
		if (err) {
			console.log(err);
			res.json({ msg: 'failed to fetch leave requests' });
		}
		res.json(requests)
	})
}

module.exports = {
	viewLeaveRequests,
}
