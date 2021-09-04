const express = require('express');
const router = express.Router();

const empController = require('../controllers/employees.controller');

const rateLimit = require('express-rate-limit');
const employeeLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4, // Limit each IP to 4 requests
})

router.post('/addEmp', employeeLimiter, empController.addEmp);
router.put('/updateEmployee', employeeLimiter, empController.updateEmployee);
router.post('/deleteEmployee', employeeLimiter, empController.deleteEmployee);

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
