const express = require('express')
const router = express.Router()

const deptController = require('../controllers/departments-controller')

router.post('/', deptController.createDepartment)
router.delete('/', deptController.deleteDepartment)
router.put('/', deptController.updateDepartment)
router.put('/team', deptController.createTeam)
router.delete('/team', deptController.deleteTeam)
router.post('/team/position', deptController.createPosition)
router.delete('/team/position', deptController.deletePosition)
// router.get('/departmentsList', deptController.readAllDepartments)
router.get('/departmentsList', deptController.queryDepartment)
router.get('/teamsList', deptController.queryTeam)

module.exports = router