const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_CLOUD;

mongoose.connect(mongoDB, {useNewUrlParser: true, useCreateIndex:true});

let db = mongoose.connection;

db.on('open', function(){
    console.log('connection to database is established');
})

db.on('error', function(){
    console.log('failed to connect to database');
})

module.exports = db;