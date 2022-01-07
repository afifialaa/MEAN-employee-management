const express = require('express');
const router = express();

const jwtAuth = require('./authentication/token.auth');
const {isAdmin} = require('./middlewares/role.mid');

/* Routes */
const employeeRoute = require('./routes/employee.route');
const userRoute = require('./routes/user.routes');
const dashboardRoute = require('./routes/dashboard.route');
const accountRoutes = require('./routes/account.routes');
const blogRoutes = require('./routes/blog.routes');

router.use('/account', accountRoutes);
router.use('/employee', jwtAuth.verifyToken, isAdmin, employeeRoute);
router.use('/user', userRoute);
router.use('/dashboard', jwtAuth.verifyToken, isAdmin,  dashboardRoute);
router.use('/blog', jwtAuth.verifyToken, blogRoutes);

module.exports = router;