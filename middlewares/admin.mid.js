/* Admin role authorization */
let debugAdmin = require('debug')('worker:adminMid'); 

function isAdmin(req, res, next){
    debugAdmin('Check if role is admin');
    debugAdmin('Role in request: ', req.role);
    if(req.role === 'admin'){
        debugAdmin('User is an admin');
        next();
    }else{
        debugAdmin('User is not an admin');
        return res.json({err: 'User is not an admin'});
    }
}

module.exports = isAdmin;