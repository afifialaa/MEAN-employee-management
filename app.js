const express = require('express')
const app = express()

const apiv1 = require('./api.v1')

require('./database/config')

const bodyParser = require('body-parser')

const cors = require('cors')
const path = require('path')

/** Logger */
if (process.env.NODE_ENV == 'development') {
    console.log('SETTING DEVELOPMENT ENVIRONMENT')

    const morgan = require('morgan')
    const fs = require('fs')

    let logFileStream = fs.createWriteStream(path.join(__dirname, 'logs', 'dev.log'), { flags: 'a' })
    app.use(morgan('combined', { stream: logFileStream }))
}


if (process.env.NODE_ENV == 'testing') {
    const morgan = require('morgan')
    const fs = require('fs')

    let logFileStream = fs.createWriteStream(path.join(__dirname, 'logs', 'test.log'), { flags: 'a' })
    app.use(morgan('combined', { stream: logFileStream }))
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* API v1 */
app.use('/api/v1', apiv1)

/** Error handler */
app.use(function (err, req, res, next) {
    return res.status(err.http_code || 500).json({ msg: err.message})
})


if (process.env.NODE_ENV == 'production') {
    // Serve static files....
    app.use(express.static(__dirname + '/dist/emp-crud'))

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/emp-crud/index.html'))
    })
}

module.exports = app
