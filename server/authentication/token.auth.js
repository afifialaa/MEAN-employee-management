const jwt = require('jsonwebtoken');
const secret_key = 'my_secret';

function generateToken(user) {
	return jwt.sign({ user: user.email }, secret_key);
}

function validateToken(req, res, next) {
	const token = req.header.authorization.split(' ')[1];
	jwt.verify(token, secret_key, (err, decoded) => {
		if (err) console.log(err);

		console.log('valid token');
		next();
	})
}

module.exports = {
	generateToken,
	validateToken
};
