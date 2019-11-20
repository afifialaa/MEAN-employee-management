const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
var secret_key = 'my_secret';

//signin route
router.post('/signin', function(req, res){
    console.log('sigin in was touched');
    if(req.body == null || req.body == ' '){
        console.log('body is empty');
    }

    let userObj = {
        email: req.body.email,
        password: req.body.password
    };

    User.findOne({email:userObj.email}, function(err, user){
        if(err) console.log(err);

        bcrypt.compare(userObj.password, user.password, function(err, result){
            if(err) console.log(err);

            if(result == true){
                //generate jwt
                const token = jwt.sign({user:user.email}, secret_key);
                console.log(token);
                res.json({
                    token: token,
                    email: user.email
                });
            }else if(result == false){
                console.log('failed to auth');
                res.json({msg: 'failed to auth'});
            }
        })
    });
});

//test route
router.get('/test', function(req, res){
    console.log('test was touched');

    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secret_key, function(err, decoded){
        if(err) console.log(err);

        console.log('decoded data: ' + decoded);
        res.json({user:decoded});
    })
});

//signup route
router.post('/signup', function(req, res){
    let userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    //****validate data
    //save to db
    var user = new User(userObj);

    user.save(function(err, user){
        console.log('saving user');
        if(err) console.log(err);

        res.json({msg: 'user was created'});
    });
})

module.exports = router;
