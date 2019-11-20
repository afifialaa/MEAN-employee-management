var express = require('express');
var app = express();

var bodyParser = require('body-parser');

const cors = require('cors');
const port = 80;

const morgan = require('morgan');

var employeeRoute = require('./routes/employee.route');
var userRoute = require('./routes/user.route');

app.use(morgan());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', employeeRoute);
app.use('/user', userRoute);

module.exports = app;
