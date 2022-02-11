const express = require('express');
const router = express();

const jwtAuth = require('./authentication/token.auth');
const {isAdmin} = require('./middlewares/role.mid');

/* Routes */
const employeeRoute = require('./routes/employee.route');
const userRoute = require('./routes/user.routes');
const dashboardRoute = require('./routes/dashboard.route');
const blogRoutes = require('./routes/blog.routes');
const taskRoutes = require('./routes/task.route')
const authRoutes = require('./routes/auth')

router.use('/auth',  authRoutes);
router.use('/employee', jwtAuth.verifyToken, isAdmin, employeeRoute);
router.use('/user', jwtAuth.verifyToken, isAdmin, userRoute);
router.use('/dashboard', jwtAuth.verifyToken, isAdmin,  dashboardRoute);
router.use('/blog', jwtAuth.verifyToken, blogRoutes);
router.use('/task', jwtAuth.verifyToken, taskRoutes);


module.exports = router;