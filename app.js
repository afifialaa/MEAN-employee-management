const express = require('express');
const app = express();

let db = require('./config/db.config');
db.connect();

const bodyParser = require('body-parser');
const fs = require('fs');

const cors = require('cors');
const path = require('path');

/* Routes */
const employeeRoute = require('./routes/employee.route');
const userRoute = require('./routes/user.routes');
const dashboardRoute = require('./routes/dashboard.route');
const accountRoutes = require('./routes/account.routes');
const blogRoutes = require('./routes/blog.routes');

/* Middlwares */
const jwtAuth = require('./authentication/token.auth');
const isAdmin = require('./middlewares/admin.mid');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', jwtAuth.verifyToken, isAdmin, employeeRoute);
app.use('/user', jwtAuth.verifyToken, isAdmin, userRoute);
app.use('/dashboard', jwtAuth.verifyToken, isAdmin,  dashboardRoute);
app.use('/account', accountRoutes);
app.use('/blog', jwtAuth.verifyToken, blogRoutes);

// Serve static files....
/* app.use(express.static(__dirname + '/dist/emp-crud'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/emp-crud/index.html'));
});
*/
module.exports = app;
