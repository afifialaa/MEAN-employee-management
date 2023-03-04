const jwt = require('jsonwebtoken')

function generateToken(email, role) {
    return jwt.sign({ email: email, role:role}, process.env.SECRET_KEY)
}

module.exports = generateToken