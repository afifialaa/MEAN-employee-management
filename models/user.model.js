const mongoose = require('mongoose');

const bc = require('bcrypt');
var saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

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
