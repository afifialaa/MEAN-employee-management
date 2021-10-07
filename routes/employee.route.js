const express = require('express');
const router = express.Router();

const empController = require('../controllers/employees.controller');

const limiter = require('../security/req.limiter');

router.post('/addEmp', limiter.employeeLimiter, empController.addEmp);
router.put('/updateEmployee', limiter.employeeLimiter, empController.updateEmployee);
router.post('/deleteEmployee', limiter.employeeLimiter, empController.deleteEmployee);

router.get('/searchById', empController.searchById);
router.get('/searchByFirstName', empController.searchByFirstName);
router.get('/searchByLastName', empController.searchByLastName);
router.get('/searchByEmail', empController.searchByEmail);
router.get('/searchByGender', empController.searchByGender);
router.get('/searchByJobTitle', empController.searchByJobTitle);
router.get('/searchByCountry', empController.searchByCountry);
router.get('/searchByCity', empController.searchByCity);
router.get('/searchByDepartment', empController.searchByDepartment);
router.get('/searchByUniversity', empController.searchByUniversity);

module.exports = router;
