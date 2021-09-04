const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const jwtAuth = require('../authentication/token.auth');

const mailer = require('../mailer/mailer');

/* Debugging */
let debugLogin = require('debug')('worker:userLogin');
let debugCreateUser = require('debug')('worker:createUser');
let debugUpdateUser = require('debug')('worker:updateUser');
let debugDeleteUser = require('debug')('worker:deleteUser');
let debugUser = require('debug')('worker:debugUser');

/**
 * Search by email
 * @param {*} req 
 * @param {*} res 
 */
function searchByEmail (req, res) {
    User.findOne({ email: req.query.email }, (err, user) => {
        if (err) {
            return res.json({ err: 'Failed to search for user' });
        }

        return res.status(200).json({ user: user });
    })
}

/**
 * Search by role
 * @param {*} req 
 * @param {*} res 
 */
function searchByRole (req, res) {
    User.find({ role: req.query.role }, (err, user) => {
        if (err) {
            return res.json({ err: 'Failed to search for user.' });
        }
        return res.json({ user: user });
    });
}


/**
 * Log user in
 * @param {*} req 
 * @param {*} res 
 */
function login (req, res) {
    debugLogin('user is logging in');
    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    debugLogin('userObj: ', userObj);

    User.findOne({ email: userObj.email }, (err, user) => {
        // Mongoose error
        if (err) {
            debugLogin('Database error');
            debugLogin(err);
            return res.json({ err: 'Database error' });
        }

        if (!user || user == null) {
            // Wrong email
            debugLogin('Email does not exist');
            return res.json({ err: 'Email does not exist' });
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    debugLogin('Failed to authenticate user');
                    return res.json({ err: 'Failed to authenticate user' });
                }

                if (result == true) {
                    // Generate JWT
                    const jwtoken = jwtAuth.generateToken(user.email, user.role);
                    debugLogin('User was found, and token was generated');
                    return res.json({
                        token: jwtoken,
                        email: user.email,
                        role: user.role
                    });
                } else {
                    // Passwords do not match
                    debugLogin('Wrong email or password');
                    return res.json({ err: 'Wrong password or email.' });
                }
            })
        }
    });
};

/**
 * Create new user
 * @param {*} req 
 * @param {*} res 
 */
function createUser (req, res) {
    debugCreateUser('Creating user');
    let userObj = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    };

    debugCreateUser('userObj: ', userObj);

    let user = new User(userObj);

    user.save((err, user) => {
        if (err && err.code == 11000) {
            debugCreateUser('User already exists');
            return res.json({ err: 'User already exists.' });
        }
        if (err) {
            debugCreateUser('Failed to create user');
            return res.json({ err: 'Failed to create user.' });
        }
        debugCreateUser('User was created successfully');
        return res.status(201).json({ msg: 'User was created successfully.' });
    })
}

/**
 * Update user
 * @param {*} req 
 * @param {*} res 
 */
function updateUser (req, res){
    debugUpdateUser('updating user');
    let user = {
        email: req.body.email,
        password: req.body.password
    }

    debugUpdateUser('user: ', user);

    User.updateOne({ email: req.body.email }, user, (err) => {
        if (err) {
            debugUpdateUser('Failed to update user');
            return res.json({ err: 'Failed to update user' });
        }
        debugUpdateUser('User was updated successfully');
        return res.json({ msg: 'User was updated' });
    })
}

/**
 * Delete user
 * @param {*} req 
 * @param {*} res 
 */
function deleteUser (req, res) {
    debugDeleteUser('Deleting user');
    User.findOneAndDelete({ email: req.body.email }, (err) => {
        if (err) {
            debugDeleteUser('Failed to delete user');
            return res.json({ err: 'Failed to delete user' });
        }
        debugDeleteUser('User was deleted successfully');
        return res.json({ msg: 'User was deleted successfully' });
    });
}

/**
 * Forgot password handler
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 */
async function forgotPassword(req, res) {
    debugUser('********* Forgot password controller **********');

    try {
        let token = await generateResetToken();
        let newUser = await User.findOneAndUpdate({ email: req.body.email }, { resetPasswordToken: token }, { returnOriginal: false });
        await mailer.resetPasswordEmail(newUser.email, 'Reseting password', token);

        return res.json({ msg: 'Emai was sent' });
    } catch (err) {
        debugUser(err);
        return res.json({ err: 'Failed to reset password' });
    }

}

/**
 * Checks reset token validity
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 */
function checkResetToken (req, res) {
    let resetToken = req.body.resetToken;
    User.findOne({ resetPasswordToken: resetToken }, (err, user) => {
        if (err) {
            return res.json({ err: 'Failed to validate error' });
        } else if (user == null) {
            return res.json({ err: 'Token not valid' });
        } else {
            return res.json({ email: user.email });
        }
    })
}

/**
 * Updaing password
 * @param {*} req 
 * @param {*} res 
 */
function resetPassword (req, res){
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userObj.email }, (err, user) => {
        if (err) {
            debugUser(err);
            return res.json({ err: 'Failed to change password' });
        } else {
            user.password = userObj.password;
            user.resetPasswordToken = undefined;
            user.save();
            debugUser('Password is changed');
            return res.json({ msg: 'Password was changed' });
        }
    })
}

/*function resetPassword(req, res) {
    let user = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOneAndUpdate({ email: user.email }, { password: user.password }, (err, user) => {
        if (err) {
            debugUser(err);
            return res.json({ err: 'Failed to change password' });
        } else {
            debugUser('Password is changed');
            return res.json({ msg: 'Password was changed' });
        }
    })
}*/

async function generateResetToken() {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(20, (err, buf) => {
            if (err) {
                reject(err);
            } else {
                resolve(buf.toString('hex'));
            }
        })
    })
}


module.exports = {
    login,
    createUser,
    updateUser,
    deleteUser,
    searchByEmail,
    searchByEmail,
    forgotPassword,
    checkResetToken,
    resetPassword
};

