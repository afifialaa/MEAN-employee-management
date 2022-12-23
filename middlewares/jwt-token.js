const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1]

	try{
		let decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.email = decoded.email
		req.role = decoded.role
		next()
	}catch(err){
		console.log(err.stack)
		return res.status(401).json({msg: 'Unauthorized access'})
	}
}

module.exports = verifyToken
