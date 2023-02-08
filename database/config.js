const mongoose = require('mongoose');


let Database = (() => {
    let connection
    let connectionString

    if (process.env.NODE_ENV == 'development') {
        connectionString = process.env.MONGODB_DEV
        connect(connectionString)
    }

    if (process.env.NODE_ENV == 'testing') {
        connectionString = process.env.MONGODB_TEST
        connect(connectionString)
    }

    if (process.env.NODE_ENV == 'production') {
        connectionString = process.env.MONGODB_PROD
        connect(connectionString)
    }

    async function connect(connString) {
        try {

            mongoose.connection.on('open', () => {
                console.log('\x1b[34m', '[database]', '\x1b[32m', 'connection to database is established \x1b[0m');
            })
        
            mongoose.connection.on('error', () => {
                console.log('\x1b[34m', '[database]', '\x1b[32m', 'failed to connect to database \x1b[0m');
            })

            mongoose.connection.on('close', ()=>{
                console.log('\x1b[34m', '[database]', '\x1b[32m', 'connection to database is terminated \x1b[0m');
            })

            // connection = mongoose.connect(connString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
            connection = mongoose.connect('mongodb+srv://admin:cr3ErbzYtnrFB7Qq@employee-management.w2ztr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

        }catch(err){
            console.log(err)
        }
        
    }

    return {
        getConnectionString: function(){
            return connectionString
        },

        getInstance: function () {
            if (!connection) {
                connect();
            }
            return connection;
        }
    }
})()