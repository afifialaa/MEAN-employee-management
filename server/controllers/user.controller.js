const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const token = require('../authentication/token.auth');

const createUser = require('../helpers/createUser');

//signin route
function signin(req, res){
    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    console.log(userObj.email);

    User.findOne({email:userObj.email}, (err, user)=>{
        //mongoose error
        if(err) console.log(err);
        
        if(user === null){
            //wrong email
            res.json({msg: 'email does not exist'});
        }else{
            bcrypt.compare(userObj.password, user.password, (err, result)=>{
                if(err){
                    console.log(err);
                    res.json({msg: 'failed to authenticate user'});
                }

                //result: boolean
                if(result == true){
                    //generate jwt
                    const jwtoken = token.generateToken(user); 
                    res.json({
                        token: jwtoken,
                        email: user.email
                    });
                }else if(result == false){
                    //passwords did not match
                    res.json({msg:'wrong password or email'});
                }
            })
        }
    });
};

//signup route
function signup(req, res){

    let userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    //validate data
    //save to db
	createUser(res, userObj);
}

module.exports = {
    signin,
    signup
};

