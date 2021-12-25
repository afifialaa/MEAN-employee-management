const express = require('express');
const app = express();

const apiv1 = require('./api.v1');

let db = require('./config/db.config');
db.connect();

const bodyParser = require('body-parser');

const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

/* API v1 */ 
app.use('/api/v1', apiv1);

if(process.env.NODE_ENV == 'production'){
    // Serve static files....
     app.use(express.static(__dirname + '/dist/emp-crud'));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/emp-crud/index.html'));
    });
}

module.exports = app;
