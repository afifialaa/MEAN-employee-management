const jwt = require('jsonwebtoken');

let debugJWT = require('debug')('worker:jwtToken');

/* Generte JWT token */
function generateToken(email, role) {
    return jwt.sign({ email: email, role:role}, process.env.SECRET_KEY);
}

function verifyToken(req, res, next){
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1];

	/* SHOULD BE REMOVED */
	if(process.env.NODE_ENV='development'){
		req.role = 'admin';
		req.email = 'afifi@gmail.com';
		next();
		return;
	}

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			return res.status(403).json({err: "Missing or invalid jwt"});
		}else{
			// Setting request variables
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
