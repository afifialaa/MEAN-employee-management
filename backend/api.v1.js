const express = require('express')
const router = express()

const limiter = require('./security/req-limiter')

/* Middlewares */
const verifyToken = require('./middlewares/jwt-token')


// /* Routes */
const employeeRoutes = require('./routes/employee-routes')
const userRoutes = require('./routes/user-routes')
const accountRoutes = require('./routes/account-routes')
const deptRoutes = require('./routes/department-routes')


router.use('/account', accountRoutes)
router.use('/user', verifyToken, userRoutes)
router.use('/employee', limiter.employeeLimiter, employeeRoutes)
router.use('/department', verifyToken, deptRoutes)

module.exports = router