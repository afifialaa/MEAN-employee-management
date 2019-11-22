var express = require('express');
var app = express();

const bodyParser = require('body-parser');
const fs = require('fs');

const cors = require('cors');
const port = 80;

const morgan = require('morgan');

const employeeRoute = require('./routes/employee.route');
const userRoute = require('./routes/user.route');

app.use(morgan('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', employeeRoute);
app.use('/user', userRoute);

module.exports = app;
