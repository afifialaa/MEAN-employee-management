const {createTask, fetchTasks, updateTask, deleteTask}  = require('../controllers/tasks.controller')

const express  = require('express')
const router = express()

const limiter = require('../security/req.limiter')

router.post('/', limiter.userLimiter, createTask);
router.get('/', fetchTasks);
router.put('/', limiter.userLimiter, updateTask);
router.delete('/', deleteTask);

module.exports = router