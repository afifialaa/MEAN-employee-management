const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

//signin route
router.post('/signin', function(req, res){
    var user = {
        email: req.body.email,
        password: req.body.password
    };

    console.log('email: ' + user.email);
    console.log('password: ' + user.password);

    Employee.findOne({email:user.email, password: user.password}, function(err, user){
        if(err) console.log(err);

        console.log('found employee:' + user);
        res.send('hello');
        console.log('after send ');
    });
})

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