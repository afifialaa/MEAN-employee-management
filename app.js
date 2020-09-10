const express = require('express');
const app = express();

const dbConfig = require('./config/dbConfig');

const bodyParser = require('body-parser');
const fs = require('fs');

const cors = require('cors');

const employeeRoute = require('./routes/employee.route');
const userRoute = require('./routes/user.route');
const knowledgeRoute = require('./routes/knowledge.route');

const jwtAuth = require('./authentication/token.auth');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/employee', jwtAuth.verifyToken, employeeRoute);
app.use('/user', userRoute);
app.use('/knowledge', knowledgeRoute);

module.exports = app;
