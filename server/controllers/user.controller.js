const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const token = require('../authentication/token.auth');

const createUser = require('../helpers/createUser');

// Signin route
function signin(req, res){
    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    console.log(userObj.email);

    User.findOne({email:userObj.email}, (err, user)=>{
        // Mongoose error
        if(err) console.log(err);
        
        if(user === null){
            // Wrong email
            res.json({msg: 'email does not exist'});
        }else{
            bcrypt.compare(userObj.password, user.password, (err, result)=>{
                if(err){
                    console.log(err);
                    res.json({msg: 'failed to authenticate user'});
                }

                //result: boolean
                if(result == true){
                    // Generate JWT
                    const jwtoken = token.generateToken(user); 
                    res.json({
                        token: jwtoken,
                        email: user.email
                    });
                }else if(result == false){
                    // Passwords do not match
                    res.json({msg:'wrong password or email'});
                }
            })
        }
    });
};

// Signup route
function signup(req, res){

    let userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    // Validate data
    // Save to db
	createUser(res, userObj);
}

module.exports = {
    signin,
    signup
};

