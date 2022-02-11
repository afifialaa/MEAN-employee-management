const mongoose = require('mongoose');

const jwt = require('../authentication/token.auth')

const bcrypt = require('bcrypt');
let saltRounds = 10;

const Schema = mongoose.Schema;
const roles = require('../models/roles');

const TaskSchema = require('./task.schema');

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email can't be blank"],
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password can't be blank"],
    },
    role: {
        type: String,
        enum: roles
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    },
    tasks: [TaskSchema]
}, {timestamps:true});

// Hash passwords before save event
UserSchema.pre('save', function (next) {
    let user = this;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.isValidPassword = async function(password) {
    const user = this 

    let compare = await bcrypt.compare(password, user.password)
    return compare
}

let User = mongoose.model('User', UserSchema);

module.exports = User
