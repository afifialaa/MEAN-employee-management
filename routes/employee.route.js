const express = require('express');
const router = express.Router();

const empController = require('../controllers/employees.controller');

const limiter = require('../security/req.limiter');

router.post('/', limiter.employeeLimiter, empController.createEmployee);
router.get('/:id', limiter.employeeLimiter, empController.readEmployee);
router.put('/:id', limiter.employeeLimiter, empController.updateEmployee);
router.delete('/:id', limiter.employeeLimiter, empController.deleteEmployee);

router.get('/', empController.readEmployees);

module.exports = router;
