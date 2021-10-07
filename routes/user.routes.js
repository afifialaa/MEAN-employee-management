const userController = require('../controllers/user.controller');
const taskController = require('../controllers/tasks.controller');

const express = require('express');
const router = express.Router();


const limiter = require('../security/req.limiter');

router.post('/createUser', limiter.userLimiter, userController.createUser);
router.post('/checkResetToken', limiter.userLimiter, userController.checkResetToken);
router.post('/resetPassword', limiter.userLimiter, userController.resetPassword);

// User tasks routes
router.post('/tasks', limiter.userLimiter, taskController.createTask);
router.get('/tasks', taskController.fetchTasks);
router.put('/tasks', limiter.userLimiter, taskController.updateTask);
router.delete('/tasks', limiter.userLimiter, taskController.deleteTask);


module.exports = router;
