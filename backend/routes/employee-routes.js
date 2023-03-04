const express = require('express')
const router = express.Router()

const empController = require('../controllers/employees-controller')

router.post('/', empController.createEmployee)
router.get('/', empController.readEmployees)
router.get('/:id', empController.readEmployee)
router.put('/:id', empController.updateEmployee)
router.delete('/:id', empController.deleteEmployee)

module.exports = router
