const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4, // Limit each IP to 4 requests
})

router.post('/user/login', authController.login)
router.post('/user/signup', limiter, authController.signup)

router.post('/checkResetToken', limiter, authController.checkResetToken);
router.post('/password', limiter, authController.resetPassword);

module.exports = router
