let userSet = new Set();
userSet.add('admin');
userSet.add('simple');
userSet.add('guest');


function getRole(req, res, next){
	if(userSet.has(req.role)){
		next();
	}else{
		return res.status(401).json({msg: 'Role not defined'});
	}
}

