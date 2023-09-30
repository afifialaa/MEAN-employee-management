const jwt = require('jsonwebtoken');

/* Generte JWT token */
function generateToken(email, role) {
    return new Promise((resolve, reject)=>{
        let token =  jwt.sign({ email: email, role:role}, process.env.SECRET_KEY)
        resolve(token)
    })
}

module.exports = {
	generateToken
}
