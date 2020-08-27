const jwt = require('jsonwebtoken');

// Store safely
const secret_key = 'secret_key';

module.exports = function(req, res, next){
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1];

	jwt.verify(token, secret_key, (err, decoded) => {
		if (err) {
            res.json({msg: "missing or invalid jwt"});
        }
        else{
            console.log('valid token');
            next();
        }
    })
}