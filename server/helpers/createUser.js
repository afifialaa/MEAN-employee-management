const User = require('../models/user.model');

function createUser(res, userObj){
    let user = new User(userObj);

    user.save((err, user)=>{
        if(err) console.log(err);

        console.log('user was created');
        //generate token and log user in
        res.json({token: 'user was created'});
    })
}

module.exports = createUser;