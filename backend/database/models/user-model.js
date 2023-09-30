const mongoose = require('mongoose')

const jwt = require('../../authentication/token.auth')

const bcrypt = require('bcrypt')
let saltRounds = 10

const Schema = mongoose.Schema;
const roles = require('./roles')

const TaskSchema = require('./task.schema')

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
}, { timestamps: true });

// Hash passwords before save event
UserSchema.pre('save', function (next) {
    let user = this;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})

UserSchema.methods.isValidPassword = function (password) {
    return new Promise(async (resolve, reject) => {
        const result = await bcrypt.compare(password, this.password)
        if (result == null || !result) {
            reject(403)
        } else {
            resolve()
        }
    })
}

UserSchema.statics.create = (userObj) => {
    return new Promise((resolve, reject) => {
        let user = new User(userObj)

        user.save((err, result) => {
            if (err) reject(err)

            resolve()
        })
    })
}

UserSchema.statics.query = (query) => {
    return new Promise((resolve, reject) => {
        User.findOne(query, (err, user) => {
            if (err) {
                reject(err)
            } else if (user == null || !user) {
                reject(404)
            }
            resolve(user)
        })
    })
}

UserSchema.statics.queryMany = (query) => {
    return new Promise((resolve, reject) => {
        User.find(query, (err, users) => {
            if (err) {
                reject(err)
            }
            if (users === null || users.length == 0) reject(404)

            resolve(users)
        })
    })
}

UserSchema.statics.updateUser = (query, user) => {
    return new Promise((resolve, reject) => {
        User.updateOne(query, user, (err) => {
            if(err){reject(err)}

            resolve(user)
        })
    })
}

UserSchema.statics.delete = (query)=>{
    return new Promise((resolve, reject)=>{
        User.deleteOne(query, (err, result)=>{
            if(err) reject(err)

            if(result.deletedCount == 0) reject(404)

            resolve()
        })
    })
}



let User = mongoose.model('User', UserSchema);

module.exports = User
