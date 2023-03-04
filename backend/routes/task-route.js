const tasksController = require('../controllers/tasks-controller')

const express  = require('express')
const router = express()


router.post('/', tasksController.createTask)
router.get('/', tasksController.readTask)
router.put('/',  tasksController.updateTask)
router.delete('/', tasksController.deleteTask)

module.exports = router