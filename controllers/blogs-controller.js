const repository = require('../database/repository/blog-repository')

async function readPost(req, res){
    let query = req.query.postID

    repository.readPost(query).then(
        (data) =>{
            return res.status(200).json({post: data})
        },
        (error)=>{
            return res.status(404).json({err: 'Post was not found'})
        }
    )
}


async function createPost(req, res){
    let post = {
        user: req.email,
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        postedOn: new Date()
    }

    let newPost = new Post(post)

    repository.createPost(newPost).then(
        (data)=> {
            return res.status(201).json({ msg: 'Article was created' })
        },
        (error)=>{
            return res.status(409).json({ err: 'Failed to save article' })
        }
    )
}


async function deletePost (req, res){
}

async function updatePost (req, res){
    let article = {
        articleId: req.body.articleId,
        user: req.email,
        title: req.body.title,
        content: req.body.content,
    }

    repository.updatePost(post).then(
        (data)=>{
            res.status(200).json({ msg: 'Article was updated' })
        },
        (error)=>{
            res.status(402).json({ err: 'Failed to update article' })
        }
    )
}

async function readAll(req, res){}

// Returns articles of a user

module.exports = {
    createPost,
    readPost,
    updatePost,
    deletePost,
    readAll
}
