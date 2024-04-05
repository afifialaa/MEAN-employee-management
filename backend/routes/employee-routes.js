const express = require('express')
const router = express.Router()

const empController = require('../controllers/employees-controller')

router.post('/', empController.createEmployee)
router.get('/', empController.queryEmployee)
router.put('/:id', empController.updateEmployee)
router.delete('/', empController.deleteEmployee)

module.exports = router
