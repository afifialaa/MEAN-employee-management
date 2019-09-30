const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/private';

mongoose.connect(mongoDB, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('open', function(){
    console.log('dbConfig#open: connection established');
})

db.on('error', function(){
    console.log('dbConfig#error: connection failed');
})

module.exports = db;