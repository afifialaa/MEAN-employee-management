const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

//signin route
router.post('/signin', function(req, res){
    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    console.log('email: ' + userObj.email);
    console.log('password: ' + userObj.password);

    User.findOne({email:userObj.email}, function(err, user){
        //not hashing password*
        //using plain text passwords
        if(err) console.log(err);

        bcrypt.compare(userObj.password, user.password, function(err, result){
            if(err) console.log(err);

            if(result == true){
                //generate jwt
                const token = jwt.sign({user:user.email}, "my_secret_key");
                console.log(token);
                res.json({token: token});
            }
        })
    });
});

//test route
router.get('/test', function(req, res){
    console.log('test was touched');

    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, "my_secret_key", function(err, decoded){
        if(err) console.log(err);

        console.log('decoded data: ' + decoded);
        res.send(decoded);
    })
});

//signup route
router.post('/signup', function(req, res){
    var userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    //validate data
    //save to db
    var user = new User(userObj);

    user.save(function(err, user){
        if(err) console.log(err);

        console.log('user was created');
        res.send('user was created');
    });
})

module.exports = router;