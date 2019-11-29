const jwt = require('jsonwebtoken');
const secret_key = 'my_secret';

function validateToken(req, res, next){
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secret_key, (err, decoded)=>{
        if(err) {
            console.log(err);
            return false;
        }

        console.log('decoded data: ' + decoded);
        next();
    })
}

module.exports = validateToken;