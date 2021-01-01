const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const jwtAuth = require('../authentication/token.auth');

/* Search by email */
function searchByEmail(req, res){
    User.findOne({email: req.query.email}, (err, user)=>{
        if(err){
            console.log(err);
            return res.json({err: 'Failed to search for user'});
        }

        return res.json({user: user});
    })
}

/* Search by role */
function searchByRole(req, res){
    User.find({role:req.query.role}, (err, user)=>{
        if(err) {
            console.log(err);
            return res.json({err: 'Failed to search for user.'});
        }
        return res.json({user: user});
    });
}


/* Log user in */
function login(req, res) {
    console.log('trying to log in');
    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    User.findOne({ email: userObj.email }, (err, user) => {
        // Mongoose error
        if (err) {
            console.log(err);
            return res.json({ err: 'Database error' });
        }

        if (!user || user == null) {
            // Wrong email
            return res.json({ err: 'Email does not exist' });
        } else {
            bcrypt.compare(userObj.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({ err: 'Failed to authenticate user' });
                }

                if (result == true) {
                    // Generate JWT
                    const jwtoken = jwtAuth.generateToken(user.email, user.role);
                    console.log('logging in');
                    return res.json({
                        token: jwtoken,
                        email: user.email,
                    });
                } else {
                    // Passwords do not match
                    return res.json({ err: 'Wrong password or email.' });
                }
            })
        }
    });
};

/* Create user */
function createUser(req, res) {

    let userObj = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
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

/* Update user */
/* Update role */
function updateUser(req, res){
    let user = {
        email: req.body.email,
        password: req.body.password
    }

    User.updateOne({email: req.body.email}, user, (err) => {
        if(err){
            console.log(err);
            return res.json({err: 'Failed to update user'});
        }
        return res.json({msg:'User was updated'});
    })
}

/* Delete user */
function deleteUser(req, res){
    User.findOneAndDelete({email: req.body.email}, (err)=>{
        if(err){
            console.log(err);
            return res.json({err :'Failed to delete user'});
        }
        return res.json({msg: 'User was deleted successfully'});
    });
}

module.exports = {
    login,
    createUser,
    updateUser,
    deleteUser,
    searchByEmail,
    searchByEmail
};

