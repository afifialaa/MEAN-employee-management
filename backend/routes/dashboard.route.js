const dashboardController = require('../controllers/dashboard.controller');
const express = require('express');
const router = express.Router();

router.get('/employeesNum', dashboardController.getEmployeesNum);
router.get('/departmentsNum', dashboardController.getDepartmentsNum);
router.get('/usersNum', dashboardController.getUsersNum);
router.get('/tasksNum', dashboardController.getTasksNum);

module.exports = router;