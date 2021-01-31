const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

const isGuest = require('../middlewares/guest.mid');

router.post('/login', isGuest, userController.login);
router.post('/signup', userController.createUser);
router.post('/forgot', userController.forgotPassword);
router.post('/createUser', userController.createUser);
router.post('/checkResetToken', userController.checkResetToken);


module.exports = router;
