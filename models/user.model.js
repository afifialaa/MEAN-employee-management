const mongoose = require('mongoose');

const bc = require('bcrypt');
let saltRounds = 10;

const Schema = mongoose.Schema;
const roles = require('../models/roles');

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
    }
}, {timestamps:true});

// Hash passwords before save event
UserSchema.pre('save', function (next) {
    let user = this;

    bc.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err);

        bc.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
})

let User = mongoose.model('User', UserSchema);

module.exports = User;