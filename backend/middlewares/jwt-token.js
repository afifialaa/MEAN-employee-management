const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
	try{
    	const authHeader = req.headers["authorization"]
    	const token = authHeader.split(' ')[1]
		let decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.email = decoded.email
		req.role = decoded.role
		next()
	}catch(err){
		return res.status(401).json({msg: 'Unauthorized access'})
	}
}

module.exports = verifyToken
