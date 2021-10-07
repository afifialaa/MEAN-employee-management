if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log('[server] server is running at port ' + port);
});
