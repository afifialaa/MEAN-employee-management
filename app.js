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

const jwtAuth = require('./authentication/token.auth');

// Serve static files....
/*app.use(express.static(__dirname + '/dist/emp-crud'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

*/
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', jwtAuth.verifyToken, employeeRoute);
app.use('/user', userRoute);
app.use('/dashboard', dashboardRoute);

module.exports = app;
