const mailer = require('../mailer/mailer');

/**
 * Check if user is a guest
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function isGuest(req, res, next){
    // A guest is trying to login
    if(req.body.email === 'guest@email.com'){
        // Send email
        mailer.guestLoginEmail()
            .then(info => {
                next()
            }).catch(err => {
            next()
        });
    }
    next()
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function isAdmin(req, res, next){
    if(req.role == 'admin'){
        next();
    }else{
        return res.status(401).json({msg: 'User is not an admin'});
    }
}

module.exports = {
    isGuest,
    isAdmin,
};
