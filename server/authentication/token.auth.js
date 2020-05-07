const jwt = require('jsonwebtoken');
const secret_key = 'secret_key';

// Return JWT
function generateToken(user) {
	return jwt.sign({ user: user.email }, secret_key);
}

module.exports = {
	generateToken,
};
