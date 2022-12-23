const express = require('express')
const router = express()

/* Middlewares */
const {isAdmin} = require('./middlewares/role.mid')
const verifyToken = require('./middlewares/jwt-token')

// /* Routes */
const employeeRoutes = require('./routes/employee-routes')
const userRoutes = require('./routes/user-routes')
const taskRoutes = require('./routes/task-route')
const blogRoutes = require('./routes/blog-routes')


router.use('/account', verifyToken, userRoutes)
router.use('/employee', verifyToken, employeeRoutes)
router.use('/blog', verifyToken, taskRoutes)
router.use('/task', verifyToken, blogRoutes)

module.exports = router