/* Admin role authorization */
function isAdmin(req, res, next){
    console.log('role found is ', req.role);
    if(req.role === 'admin'){
        console.log('user is admin');
        next();
    }else{
        console.log('user is not admin');
        return res.json({err: 'User is not admin'});
    }
}

module.exports = isAdmin;