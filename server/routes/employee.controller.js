const express = require('express');
const router = express.Router();

const empController = require('../controllers/employee.controller');

router.get('/searchByEmail', empController.searchByEmail);
router.get('/searchById', empController.searchById);
router.post('/addEmp', empController.addEmp);
router.post('/updateEmployee', empController.updateEmployee);
router.post('/deleteEmployee', empController.deleteEmployee);

module.exports = router;