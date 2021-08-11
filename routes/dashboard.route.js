const dashboardController = require('../controllers/dashboard.controller');
const express = require('express');
const router = express.Router();

router.get('/getEmployeesNum', dashboardController.getEmployeesNum);
router.get('/getDepartmentsNum', dashboardController.getDepartmentsNum);
router.get('/getUsersNum', dashboardController.getUsersNum);
router.get('/getTasksNum', dashboardController.getTasksNum);

module.exports = router;