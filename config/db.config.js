let mongoDB = '';

if(process.env.NODE_ENV == 'development'){
    console.log('\x1b[32m[server] running in development mode');
    mongoDB =  process.env.MONGODB_DEV;
}

if(process.env.NODE_ENV == 'production'){
    console.log('[server] running in production mode');
    mongoDB =  process.env.MONGODB_PROD;
}
const mongoose = require('mongoose');

/**
 * Establishes connection to database
 */
function connect(){
    mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

    let db = mongoose.connection;

    db.on('open', () => {
        console.log('[server] connection to database is established \x1b[0m');
    })

    db.on('error', () => {
        console.log('\x1b[41m [server] failed to connect to database \x1b[0m');
    })
}

module.exports = {
    connect,
}
