var express = require('express');
var app = express();

var bodyParser = require('body-parser');

const cors = require('cors');
const port = 80;

var employeeRoute = require('./routes/employee.route');
var userRoute = require('./routes/user.route');

app.use(function(req, res, next){
	console.log('new Request at ' + new Data());
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', employeeRoute);
app.use('/user', userRoute);

module.exports = app;
