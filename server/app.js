var express = require('express');
var app = express();

var Employee = require('./models/employee.model');

var bodyParser = require('body-parser');

const cors = require('cors');
const port = 80;

var employeeRoute = require('./routes/employee.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', employeeRoute);

module.exports = app;
