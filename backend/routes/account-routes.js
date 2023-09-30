const express = require('express')
const router = express.Router()

const accountsController = require('../controllers/accounts-controller')

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4, // Limit each IP to 4 requests
})

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 6, // Limit each IP to 4 requests
})


router.post('/login', loginLimiter, accountsController.login)
router.post('/signup', limiter, accountsController.signup)

// router.post('/checkResetToken', limiter, authController.checkResetToken);
// router.post('/password', limiter, authController.resetPassword);

module.exports = router
