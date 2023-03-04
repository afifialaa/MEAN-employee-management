const jwt = require('jsonwebtoken');

let debugJWT = require('debug')('worker:jwtToken');

/* Generte JWT token */
function generateToken(email, role) {
    return jwt.sign({ email: email, role:role}, process.env.SECRET_KEY);
}

/**
 * Verifies JWT token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function verifyToken(req, res, next){
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1];

	try{
		let decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.email = decoded.email
		req.role = decoded.role
		next()
	}catch(err){
		console.log(err.stack)
		next(new Error('Failed to decode'))
	}
}

module.exports = {
	generateToken,
	verifyToken
};
