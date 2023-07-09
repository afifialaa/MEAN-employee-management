const userController = require('../controllers/users-controller')

const verifyToken = require('../middlewares/jwt-token')

const express = require('express')
const router = express.Router()

router.post('/login', userController.login)
router.get('/user', userController.searchUser)
router.post('/register', verifyToken, userController.register)

module.exports = router
