const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const {isGuest} = require('../middlewares/role.mid');

const rateLimit = require('express-rate-limit');
const accountLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4, // Limit each IP to 4 requests
})

// At this time, only the guest user is allowed
router.post('/login', isGuest, userController.login);
router.post('/signup', accountLimiter, userController.signup);
router.post('/forgot', accountLimiter, userController.forgotPassword);

module.exports = router;
