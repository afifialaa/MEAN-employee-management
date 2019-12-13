const check = require('express-validator');

let user = {
		email: '',
		password: 'alaa123'
}

function validateSignin(user) {
}

//checking empty fields
function isBlank(field){
		if(!field || /^\s*$/.test(field)){
				console.log('#validation: field is empty'):
				return false;;
		}else{
				console.log('#validation: field is not empty');
				return true;
		}
}

//validation password
function isPassword(password){
		if(^[a-zA-Z0-9]{4,10}$.test(password)){
				console.log('#validation: password is in correct format');
				return true;
		}else{
				console.log('#validation: password is not in format');
				return false;
		}
}

//validation email
function isEmail(email){
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
				return true;
		}else{
				return false;
		}
}


validation(user);
