const userController = require('../controllers/user.controller');
const taskController = require('../controllers/tasks.controller');

const express = require('express');
const router = express.Router();


router.post('/createUser', userController.createUser);
router.post('/checkResetToken', userController.checkResetToken);
router.post('/resetPassword', userController.resetPassword);

// User tasks routes
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.fetchTasks);
router.put('/tasks', taskController.updateTask);
router.delete('/tasks', taskController.deleteTask);


module.exports = router;
