const mailer = require('../mailer/mailer');

function isGuest(req, res, next){
    if(req.body.email == 'guest@gmail.com'){
        // Send email
        mailer.guestLoginEmail();
    }
    next();
}

module.exports = isGuest;