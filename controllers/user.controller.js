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




module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    searchByEmail,
};

