const validator = require('validator');

function validateEmail(email){
	return validator.isEmail(email);
}

function validatePassword(password){
	return validator.isAlphanumeric(password);
}


module.exports = {
	validateEmail,
	validatePassword
}