const express = require('express')
const router = express()

/* Middlewares */
const {isAdmin} = require('./middlewares/role.mid')
const verifyToken = require('./middlewares/jwt-token')

const limiter = require('./security/req-limiter')

// /* Routes */
const employeeRoutes = require('./routes/employee-routes')
const userRoutes = require('./routes/user-routes')


router.use('/account', userRoutes)
router.use('/employee', verifyToken,limiter.employeeLimiter, employeeRoutes)

module.exports = router