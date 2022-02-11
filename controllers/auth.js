const User = require('../models/user.model')
const jwt = require('../authentication/token.auth')

/**
 * Logs user in
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function login(req, res, next) {

    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            let err = new Error('User not found')
            err.http_code = 404
            return next(err)
        }
        let validPassword = await user.isValidPassword(req.body.password)
        if (!validPassword) {
            let err = new Error('Wrong password')
            err.http_code = 403
            return next(err)
        } else {
            return res.status(200).json({ msg: 'logging user in' })
        }

    } catch (err) {
        return next(err)
    }
};

/**
 * Create new user
 * @param {*} req 
 * @param {*} res 
 */
async function signup(req, res, next) {
    try {
        let user = new User({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });

        let savedUser = await user.save(user)
        if (!savedUser) {
            let err = new Error('Failed to save user')
            err.http_code = 500
            return next(err)
        }

        const token = jwt.generateToken(user.email, user.role);
        return res.status(200).json({
            token: token,
            email: user.email,
            role: user.role
        })
    } catch (err) {
        next(err)
    }
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
 function checkResetToken (req, res) {
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
function resetPassword (req, res){
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
    login,
    signup,
    forgotPassword,
    resetPassword,
    checkResetToken
}
