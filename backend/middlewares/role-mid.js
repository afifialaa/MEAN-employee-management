const mailer = require('../mailer/mailer');

function isGuest(req, res, next){
    if(req.body.email === 'guest@email.com'){
        mailer.guestLoginEmail()
            .then(info => {
                next()
            }).catch(err => {
            next()
        })
    }
    next()
}

function isAdmin(req, res, next){
    if(req.role == 'admin'){
        next()
    }else{
        return res.status(401).json({msg: 'User is not an admin'})
    }
}

module.exports = {
    isGuest,
    isAdmin,
};
