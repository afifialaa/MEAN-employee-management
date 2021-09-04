const userController = require('../controllers/user.controller');
const taskController = require('../controllers/tasks.controller');

const express = require('express');
const router = express.Router();

const rateLimit = require('express-rate-limit');
const userLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4, // Limit each IP to 4 requests
})

router.post('/createUser', userLimiter, userController.createUser);
router.post('/checkResetToken', userLimiter, userController.checkResetToken);
router.post('/resetPassword', userLimiter, userController.resetPassword);

// User tasks routes
router.post('/tasks', userLimiter, taskController.createTask);
router.get('/tasks', taskController.fetchTasks);
router.put('/tasks', userLimiter, taskController.updateTask);
router.delete('/tasks', userLimiter, taskController.deleteTask);


module.exports = router;
