var express = require('express');
var app = express();

const bodyParser = require('body-parser');
const fs = require('fs');

const cors = require('cors');

const morgan = require('morgan');

const employeeRoute = require('./routes/employee.route');
const userRoute = require('./routes/user.route');
const knowledgeRoute = require('./routes/knowledge/knowledge.route');

const jwtAuth = require('./middlewares/jwt.auth');

app.use(morgan('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', jwtAuth, employeeRoute);
app.use('/user', userRoute);
app.use('/knowledge', knowledgeRoute);

module.exports = app;
