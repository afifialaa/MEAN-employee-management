const repository = require('../../repository/user-repository')

function register(req, res) {

    let user = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }

    repository.createUser(user).then(
        (value) => {
            sendMessage(res, value.message, value.status)           
        },
        (error) => {
            return res.status(400).json({msg: 'Failed to create user'})
        }
    )

}

module.exports = {
    register
}


function sendMessage(res, message, status) {
    return res.status(status).json({msg:message})
}