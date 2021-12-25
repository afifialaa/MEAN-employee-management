const mailer = require('../mailer/mailer');

// guest@gmail.com is the only guest email allowed
function isGuest(req, res, next){
    if(req.body.email === 'guest@gmail.com' && req.role == 'guest'){
        // Send email
        mailer.guestLoginEmail()
            .then(info => {
                next();
            }).catch(err => {
                console.error(err);
        });
    }
    next();
}

function isAdmin(req, res, next){
    if(req.role == 'admin'){
	next();
    }else{
	return res.status(401).json({msg: 'User is not an admin'});
    }
}

module.exports = {
    isGuest,
    isAdmin
};
