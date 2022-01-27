const userController = require('../controllers/user.controller');

const express = require('express');
const router = express.Router();


const limiter = require('../security/req.limiter');

const {verifyToken}  = require('../authentication/token.auth')

router.post('/', verifyToken, limiter.userLimiter, userController.createUser);
router.get('/:email', verifyToken, limiter.userLimiter, userController.readUser);
router.post('/checkResetToken', limiter.userLimiter, userController.checkResetToken);
router.post('/password', limiter.userLimiter, userController.resetPassword);

module.exports = router;
