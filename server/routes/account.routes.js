const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const isGuest = require('../middlewares/guest.mid');

router.post('/login', isGuest, userController.login);
router.post('/signup', userController.createUser);
router.post('/forgot', userController.forgotPassword);

module.exports = router;