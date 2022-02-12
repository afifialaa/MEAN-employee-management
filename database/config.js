const mongoose = require('mongoose');

if(process.env.NODE_ENV == 'development'){
    console.log('\x1b[32m[server] running in development mode');
    connect(process.env.MONGODB_DEV)
}

if(process.env.NODE_ENV == 'testing'){
    console.log('\x1b[32m[server] running in test mode');
    connect(process.env.MONGODB_TEST)
}

if(process.env.NODE_ENV == 'production'){
    console.log('[server] running in production mode');
    connect(process.env.MONGODB_PROD)
}


/**
 * Establishes connection to database
 */
function connect(connectionString){
    mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

    let db = mongoose.connection;

    db.on('open', () => {
        console.log('[database] connection to database is established \x1b[0m');
    })

    db.on('error', () => {
        console.log('\x1b[41m [server] failed to connect to database \x1b[0m');
    })

    db.on('close', ()=>{
        console.log('[database] connection to database is terminated')
    })
}

function close(){
    mongoose.connection.close()
}

module.exports = {
    connect,
    close
}
