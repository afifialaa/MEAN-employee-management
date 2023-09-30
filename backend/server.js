if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const app = require('./app')

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('\x1b[41m' + '[server] Server is running at port ' + port + '\x1b[0m')
})


