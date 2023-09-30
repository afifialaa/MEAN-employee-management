const usersController = require('../controllers/users-controller')

const role = require('../middlewares/role-mid')

const express = require('express')
const router = express.Router()

// router.get('/user', usersController.searchUser)
router.post('/', role.isAdmin, usersController.createUser)
router.put('/', role.isAdmin, usersController.updateUser)
router.delete('/', role.isAdmin, usersController.deleteUser)
router.get('/', role.isAdmin, usersController.queryUser)

module.exports = router
