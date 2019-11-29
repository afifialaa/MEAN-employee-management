const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const validateToken = require('../validation/token.validate');

//signin route
router.post('/signin', function(req, res){
    console.log('user.route #router.post');
    var userObj = {
        email: req.body.email,
        password: req.body.password
    };
    
    User.findOne({email:userObj.email}, (err, user)=>{
        //mongoose error
        if(err) console.log(err);
        
        if(user === null){
            //user was not found
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
                    const token = jwt.sign({user:user.email}, secret_key);
                    console.log(token);
                    //success
                    res.json({
                        token: token,
                        email: user.email
                    });
                }else if(result == false){
                    //passwords did not match
                    console.log('failed to auth');
                    res.json({msg:'wrong password or email'});
                }
            })
        }
    });
});

//testing route
router.get('/test', validateToken, (req, res)=>{
    console.log('passed token validation');
    res.send('wasaaap user');
})

//signup route
router.post('/signup', (req, res)=>{

    let userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    //validate data
    //save to db
    var user = new User(userObj);

    user.save((err, user)=>{
        if(err) console.log(err);

        //creating a token

        console.log('user was created');
        res.json({token: 'user was created'});
    });
})

module.exports = router;
