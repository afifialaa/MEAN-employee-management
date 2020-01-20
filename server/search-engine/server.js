const app = require('./app');

const port = 8090;
app.listen(port, function(){
	console.log('search engine is listening at port: ' + port);
})
