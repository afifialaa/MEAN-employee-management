/* Admin role authorization */
function isAdmin(req, res, next){
    if(req.role === 'admin'){
        next();
    }else{
        return res.json({err: 'User is not admin'});
    }
}

module.exports = isAdmin;