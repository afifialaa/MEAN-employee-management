const User = require('../models/user.model') 

function getUser(query) {

    return new Promise((resolve, reject)=>{
        User.findOne(query, {password: 0}, (err, user)=> {
            if(err) {
                reject()
            }else{
                resolve(user)
            }
        })
    })
}

function deleteUser(user){

    return new Promise( (resolve, reject)=>{
        User.deleteOne(user, (err)=>{
            if(err){
                reject({msg: 'Failed to delete user'})
            }
            resolve()
        })

    })
}

function updateUser(user){}

function createUser(user){
    return new Promise( (resolve, reject)=>{
        let userObj = new User(user)

        userObj.save( (err, result)=>{
            if(err){
                reject(err)
            }
            resolve()
        })
    })
}

module.exports = {
    createUser,
    getUser
}
