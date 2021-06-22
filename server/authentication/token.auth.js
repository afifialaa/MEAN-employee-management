const jwt = require('jsonwebtoken');

let debugJWT = require('debug')('worker:jwtToken');

/* Generte JWT token */
function generateToken(email, role) {
    debugJWT('Generating token with provided email', email, ' and ', role, ' role');
	return jwt.sign({ email: email, role:role}, process.env.SECRET_KEY);
}

function verifyToken(req, res, next){
    debugJWT('Verifying token');
	const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1];

	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
            debugJWT(err);
            return res.json({err: "Missing or invalid jwt"});
        }else{
            // Setting request variables
            debugJWT('Valid JWT token');
            req.role = decoded.role;
            req.email = decoded.email;
            next();
        }
    });
}

module.exports = {
	generateToken,
	verifyToken
};
