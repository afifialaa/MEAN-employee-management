const User = require('../database/models/user-model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const jwtAuth = require('../authentication/token.auth')

const mailer = require('../mailer/mailer')
const { ConsoleReporter } = require('jasmine')


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
    }

    User.create(userObj)
        .then(()=> {return res.status(200).json({msg: 'User was created successfully'})})
        .catch(
            (error) => {
                if(error.code === 11000 ) return res.status(409).json({msg: 'User already exists'})

                return res.status(500).json({ msg: 'Failed to create user' })
            }
        )
}

function queryUser(req, res){
    let query = req.query


    User.queryMany(query)
        .then((user)=> {
            return res.status(200).json({user: user})
        })
        .catch(
            (error) => {
                if(error === 404) return res.status(404).json({msg: 'User not found'})

                return res.json({msg: 'Inernal server error'})
            }
        )
}

function updateUser(req, res){
    let query = {
        email: req.query.email,
        role: req.query.role
    }

    User.updateUser({email: req.query.email}, query)
        .then(
            (user) => {
                return res.status(201).json({msg: 'User was updated successfully'})
            }
        )
        .catch(
            (error)=>{
                console.log(error)
                return res.json({msg: 'Failed to update user'})
            }
        )
}

/**
 * Delete user
 * @param {*} req 
 * @param {*} res 
 */
function deleteUser (req, res) {
    let query = {email: req.query.email}

    User.delete(query)
        .then(
            ()=>{return res.status(200).json({ msg: 'User was deleted successfully' })}
        )
        .catch(error => {
            if(error === 404) return res.status(404).json({msg:'User not found'})

            console.log(error)
            return res.json({ msg: 'Failed to delete user' })
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




module.exports = {
    createUser,
    queryUser,
    deleteUser,
    updateUser
}

