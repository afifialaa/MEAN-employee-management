const express = require('express');
const app = express();

const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const port = 8090;

app.use(morgan('common', {
	stream: fs.createWriteStream('./query.log', {flags:'a'})
}));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

module.exports = app;
