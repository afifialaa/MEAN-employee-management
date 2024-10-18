const User = require('../database/models/user-model')
const bcrypt = require('bcrypt')

const jwtAuth = require('../authentication/token.auth')
const jwt = require('jsonwebtoken')


function login(req, res) {
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    global.logger.info('login - ', userObj)

    let targetUser

    User.query({ email: userObj.email })
        .then((user) => {
            targetUser = user
            global.logger.info('user was found')
            return user.isValidPassword(userObj.password)
        })
        .then((valid) => {
            global.logger.info('generating json web token')
            return jwtAuth.generateToken(targetUser.email, targetUser.role)
        })
        .then(
            (jwtoken) => {
                return res.json({
                    token: jwtoken,
                    role: targetUser.role
                })
            }
        )
        .catch(
            (error) => {
                if (error == 500) {
                    global.logger.info('internal server error - code: 500')
                    return res.status(500).json({ msg: 'Internal Server Error' })
                }
                if (error == 404) {
                    global.logger.info('user was not found - code: 404')
                    return res.status(404).json({ msg: 'User not found' })
                }
                if (error == 403) {
                    global.logger.info('wrong email or password - code: 403')
                    return res.status(404).json({ msg: 'Wrong email or password' })
                }
                return res.status(500).json({ msg: 'Internal Server Error' })
            }
        )

}

function signup(req, res) {

    let userObj = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }

    global.logger.info('signup - ', userObj)

    User.create(userObj)
        .then(() => { return res.status(201).json({ msg: 'User was created successfully' }) })
        .catch((error) => {
            if (error && error.code == 11000) {
                return res.status(403).json({ msg: 'User already exists' })
            }
            return res.status(500).json({ msg: 'Failed to create user' })
        })
}

module.exports = {
    login,
    signup
}
