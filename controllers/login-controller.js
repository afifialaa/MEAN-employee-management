const User = require('../../models/user-model')
const repository = require('../../repository/user-repository')
const generateToken = require('../../../../shared/jwt-token')

async function login(req, res) {

    let query = {
        email: req.body.email,
        password: req.body.password
    }

    let user = await repository.getUser({email: query.email})

    if(user == null) {
        return sendMessage(res, 404, 'User not found')
    }

    let validPassword = await user.isValidPassword(query.password)
    if(!validPassword) {
        return res.status(404).json({msg: 'Wrong email or password'})
    }else{
        const token = generateToken(user.email, user.role)
        return res.status(200).json({token: token, role: user.role})
    }

}

module.exports = {
    login
}

function sendResult(req, result, status) {
    return res.status(status).json({user: result})
}


function sendMessage(res, status, message) {
    return res.status(status).json({msg:message})
}