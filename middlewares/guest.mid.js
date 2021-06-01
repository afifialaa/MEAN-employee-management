const mailer = require('../mailer/mailer');

function isGuest(req, res, next){
    if(req.body.email === 'guest@gmail.com'){
        // Send email
        mailer.guestLoginEmail()
            .then(info => {
                next();
            }).catch(err => {
                console.error(err);
            });

        next();
    }
}

module.exports = isGuest;