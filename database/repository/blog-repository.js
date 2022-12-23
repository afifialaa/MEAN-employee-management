const Post = require('../models/post-model')

function createPost(post) {

    return new Promise((reject, resolve) => {
        let newPost = Post.new(post)

        newPost.save((err, result) => {
            if (err) {
                reject()
            }
            resolve(result)
        })
    })


}

function readPost(query) {

    return new Promise((resolve, reject)=> {

        Post.findOne(query, (err, result)=> {
            if(err){
                reject()
            }

            resolve(result)
        })
    })
}

function deletePost(post) { 
    return new Promise((resolve, reject)=> {
        Post.findOneAndDelete(post, err=>{
            if(err) reject()

            resolve()
        })
    })
}

function updatePost(query, newPost) {

    return new Promise((resolve, reject)=> {
        Post.findOneAndUpdate(query, newPost, (err)=> {
            if(err) reject()

            resolve()
        })
    })
}

module.exports = {
    createPost,
    readPost,
    updatePost,
    deletePost
}