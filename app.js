const express = require('express');
const app = express();

require('./config/db.config');

const bodyParser = require('body-parser');
const fs = require('fs');

const cors = require('cors');
const path = require('path');

const employeeRoute = require('./routes/employee.route');
const userRoute = require('./routes/user.route');
const dashboardRoute = require('./routes/dashboard.route');


// Serve static files....
/*app.use(express.static(__dirname + '/dist/emp-crud'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

*/

/* Middlwares */
const jwtAuth = require('./authentication/token.auth');
const adminAuth = require('./middlewares/admin.mid');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', jwtAuth.verifyToken, adminAuth, employeeRoute);
app.use('/user', jwtAuth.verifyToken, adminAuth, userRoute);
app.use('/dashboard', jwtAuth.verifyToken, dashboardRoute);
app.use('/account', userRoute); // Login

module.exports = app;
