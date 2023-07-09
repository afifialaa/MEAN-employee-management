const repository = require('../database/repository/user-repository')
const generateToken = require('../shared/jwt-token')

async function login(req, res) {

    let query = {
        email: req.body.email,
        password: req.body.password
    }

    console.log(query)

    let user = await repository.getUser({ email: query.email })

    if (user == null) {
        // User not found
        return res.status(404).json({ msg: 'User not found' })
    }


    let validPassword = await user.isValidPassword(query.password)
    console.log(validPassword)
    if (!validPassword) {
        return res.status(404).json({ msg: 'Wrong email or password' })
    } else {
        const token = generateToken(user.email, user.role)
        return res.status(200).json({ token: token, role: user.role })
    }

}


async function searchUser(req, res){
    let query = {
        email: req.query.email
    }

    let user = await repository.searchUser({email: query.email})

    if(user == null){
        return res.status(404).json({msg: 'User not found'})
    }

    return res.status(200).json({user: user})
}

async function register(req, res) {
    console.log('REGISTERING')
    let user = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }

    repository.createUser(user).then(
        (data) => {
            return res.status(201).json({ msg: 'User is created' })
        }, (error) => {
            return res.status(400).json({ msg: 'User already exists' })
        }
    )

}


async function updateUser(req, res) {

}

async function deleteUser(req, res) {

}

/**
 * Forgot password handler
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 */
async function forgotPassword(req, res) {

    try {
        let token = await generateResetToken();
        let newUser = await User.findOneAndUpdate({ email: req.body.email }, { resetPasswordToken: token }, { returnOriginal: false });
        await mailer.resetPasswordEmail(newUser.email, 'Reseting password', token);

        return res.json({ msg: 'Emai was sent' });
    } catch (err) {
        return res.json({ err: 'Failed to reset password' });
    }
}

async function generateResetToken() {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(20, (err, buf) => {
            if (err) {
                reject(err);
            } else {
                resolve(buf.toString('hex'));
            }
        })
    })
}

/**
 * Checks reset token validity
 * @param {*} req 
 * @param {*} res 
 * @returns {json}
 */
function checkResetToken(req, res) {
    let resetToken = req.body.resetToken;
    User.findOne({ resetPasswordToken: resetToken }, (err, user) => {
        if (err) {
            return res.json({ err: 'Failed to validate error' });
        } else if (user == null) {
            return res.json({ err: 'Token not valid' });
        } else {
            return res.json({ email: user.email });
        }
    })
}

/**
 * Updaing password
 * @param {*} req 
 * @param {*} res 
 */
function resetPassword(req, res) {
    let userObj = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userObj.email }, (err, user) => {
        if (err) {
            debugUser(err);
            return res.json({ err: 'Failed to change password' });
        } else {
            user.password = userObj.password;
            user.resetPasswordToken = undefined;
            user.save();
            debugUser('Password is changed');
            return res.json({ msg: 'Password was changed' });
        }
    })
}

module.exports = {
    register,
    login,
    searchUser
}