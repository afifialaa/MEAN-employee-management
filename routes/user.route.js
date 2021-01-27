const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();


router.post('/login', userController.login);
router.post('/signup', userController.createUser);
router.post('/forgot', userController.forgotPassword);
router.post('/createUser', userController.createUser);

module.exports = router;
