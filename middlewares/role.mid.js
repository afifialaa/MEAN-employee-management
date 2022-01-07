const mailer = require('../mailer/mailer');

/**
 * Check if user is a guest
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function isGuest(req, res, next){
    console.log('is guest')
    // A guest is trying to login
    if(req.body.email === 'guest@email.com'){
        console.log('guest email')
        // Send email
        mailer.guestLoginEmail()
            .then(info => {
                next()
            }).catch(err => {
            next()
        });
    }
    console.log('not a guest')
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
    console.log('checking is admin')
    if(req.role == 'admin'){
        console.log('yes user is an admin')
        next();
    }else{
        console.log('oh shit, user is no admin')
        return res.status(401).json({msg: 'User is not an admin'});
    }
}

module.exports = {
    isGuest,
    isAdmin,
};
