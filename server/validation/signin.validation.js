const validator = require('validator');


function validateEmail(email){
	return validator.isEmail(email);
}

function validatePassword(password){
	return validator.isAlphanumeric(password);
}

function validateUser(user){
	if (validateEmail(user.email) && validatePassword(user.password)){
		return true
	}else{
		return false;
	}
}

module.exports = validateLogin;