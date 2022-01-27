const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const jwtAuth = require('../authentication/token.auth');

const mailer = require('../mailer/mailer');
const { ConsoleReporter } = require('jasmine');

/**
 * Search by email
 * @param {*} req 
 * @param {*} res 
 */
function searchByEmail (req, res) {
    User.findOne({ email: req.query.email }, (err, user) => {
        if (err) {
            return res.status(404).json({ msg: 'Failed to search for user' });
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
            return res.json({ msg: 'Failed to search for user.' });
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
    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    User.findOne({ email: userObj.email }, (err, user) => {
        // Mongoose error
        if (err) {
            return res.status(500).json({ msg: 'Database error' });
        }

        if (!user || user == null) {
            // Wrong email
            return res.status(404).json({ msg: 'Email does not exist' });
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    return res.status(404).json({ msg: 'Failed to authenticate user' });
                }

                if (result == true) {

                    // Generate JWT
                    const jwtoken = jwtAuth.generateToken(user.email, user.role);
                    return res.status(200).json({
                        token: jwtoken,
                        email: user.email,
                        role: user.role
                    });
                } else {
                    // Passwords do not match
                    return res.status(401).json({ msg: 'Wrong password or email.' });
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
    let userObj = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    };

    let user = new User(userObj);

    user.save((err, user) => {
        if (err && err.code == 11000) {
            return res.status(409).json({ msg: 'User already exists.' });
        }
        if (err) return res.status(500).json({ msg: 'Failed to create user.' });
        return res.status(201).json({ msg: 'User was created successfully.' });
    })
}

/**
 * Create new user
 * @param {*} req 
 * @param {*} res 
 */
 function signup (req, res) {
    let userObj = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    };

    let user = new User(userObj);

    user.save((err, user) => {
        if (err && err.code == 11000) {
            return res.status(409).json({ msg: 'User already exists.' });
        }
        if (err) {
            return res.status(500).json({ msg: 'Failed to create user.' });
        }
        // Generate JWT
        const jwtoken = jwtAuth.generateToken(user.email, user.role);
        return res.status(200).json({
            token: jwtoken,
            email: user.email,
            role: user.role
        });
    })
}

function readUser(req, res){
    let email = req.params.email
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            return res.status(500).json({ msg: 'Internal server error' });
        } else {
            return res.json({ user: user });
        }
    })

}

/**
 * Update user
 * @param {*} req 
 * @param {*} res 
 */
function updateUser (req, res){
    let user = {
        email: req.body.email,
        password: req.body.password
    }

    User.updateOne({ email: req.body.email }, user, (err) => {
        if (err) {
            return res.json({ err: 'Failed to update user' });
        }
        return res.json({ msg: 'User was updated' });
    })
}

/**
 * Delete user
 * @param {*} req 
 * @param {*} res 
 */
function deleteUser (req, res) {
    User.findOneAndDelete({ email: req.body.email }, (err) => {
        if (err) {
            return res.json({ err: 'Failed to delete user' });
        }
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

    try {
        let token = await generateResetToken();
        let newUser = await User.findOneAndUpdate({ email: req.body.email }, { resetPasswordToken: token }, { returnOriginal: false });
        await mailer.resetPasswordEmail(newUser.email, 'Reseting password', token);

        return res.json({ msg: 'Emai was sent' });
    } catch (err) {
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
    readUser,
    updateUser,
    deleteUser,
    searchByEmail,
    searchByEmail,
    forgotPassword,
    checkResetToken,
    resetPassword,
    signup
};

