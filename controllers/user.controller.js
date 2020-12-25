const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const jwtAuth = require('../authentication/token.auth');


// Signin route
function login(req, res) {
    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    User.findOne({ email: userObj.email }, (err, user) => {
        // Mongoose error
        if (err) {
            console.log(err);
            return res.json({ err: 'database error' });
        }

        if (!user || user == null) {
            // Wrong email
            return res.json({ err: 'email does not exist' });
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({ err: 'failed to authenticate user' });
                }

                if (result == true) {
                    // Generate JWT
                    const jwtoken = jwtAuth.generateToken(user.email);
                    return res.json({
                        token: jwtoken,
                        email: user.email
                    });
                } else {
                    // Passwords do not match
                    return res.json({ err: 'Wrong password or email.' });
                }
            })
        }
    });
};

// Create user 
function signup(req, res) {

    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    let user = new User(userObj);

    user.save((err, user) => {
        if (err && err.code == 11000) {
            return res.json({ err: 'User already exists.'});
        }
        if (err) {
            console.log(err);
            return res.json({ err: 'Failed to create user.' });
        }

        return res.json({ msg: 'User was created.' });
    })
}

function updateUserPassword(req, res){
	return res.json({});
}

function deleteUser(req, res){
	return res.json({});
}

module.exports = {
    login,
    signup
};

