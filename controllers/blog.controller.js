const Post = require('../models/article.model');


/**
 * Create new comment
 * @param {*} req 
 * @param {*} res 
 */
const createComment = (req, res)=>{
    let commentObj = {
        user: req.email,
        body: req.body.body,
        article_id: req.body.article_id,
        postedOn: new Date()
    }

    let comment = new Comment(commentObj)

    comment.save( (err, comment)=> {
        if(err){
            return res.json({err: 'Failed to save comment'}).status(403);
        }else{
            return res.json({msg: 'Comment was created'}).status(200);
        }
    })
}

const updateComment = (req, res)=>{}

/**
 * Delete comment
 * @param {*} req 
 * @param {*} res 
 */
function deleteComment (req, res){
    Comment.findByIdAndRemove(req.query.comment_id, err => {
        if(err){
            return res.json({err: 'Failed to delete comment'});
        }else{
            return res.json({msg: 'Comment was deleted'});
        }
    });
}

/**
 * Returns all comments for an article
 * @param {*} req 
 * @param {*} res 
 */
function readArticleComments (req, res){
    Comment.find({ article_id: req.query.article_id }, (err, comments) => {
        if (err) {
            debugBlog('Failed to fetch comments');
            res.status(402).json({ err: 'Failed to fetch comments' });
        } else {
            debugBlog('Comments were fetched');
            res.status(200).json({ comments: comments });
        }
    })
}


function readArticle(req, res){
    let id = req.query.postID

    Post.findById( id, (err, details)=>{
        if(err){
            return res.status(404).json({err: 'Post was not found'})
        }else{
            return res.status(200).json({details: details})
        }
    })
}


function createArticle (req, res){
    let articleObj = {
        user: req.email,
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        postedOn: new Date()
    }

    let article = new Post(articleObj)

    article.save((err, article) => {
        if (err) {
            return res.status(409).json({ err: 'Failed to save article' });
        } else {
            return res.status(201).json({ msg: 'Article was created' });
        }
    })
}

/**
 * deletes an article by id | must belong to the user
*/
function deleteArticle (req, res){
    Post.findByIdAndRemove(req.query.articleId, err => {
        if (err) {
            return res.json({ err: 'Failed to delete article' });
        } else {
            return res.status(409).json({ msg: 'Article was deleted' });
        }
    });
}

/**
 * Updates an article
 */
function updateArticle (req, res){
    let article = {
        articleId: req.body.articleId,
        user: req.email,
        title: req.body.title,
        content: req.body.content,
    }

    Post.findOneAndUpdate({ user: article.user, '_id': article.articleId }, article, (err) => {
        if (err) {
            res.status(402).json({ err: 'Failed to update article' });
        } else {
            res.status(200).json({ msg: 'Article was updated' });
        }
    });
}

// Returns articles of a user
function readUserArticles (req, res){
    let query = {}

    if(req.query.user){
        query.user = req.email
    }

    Post.find(query).sort('-postedOn').exec( (err, docs ) => {
        if (err) {
            res.status(402).json({ err: 'Failed to fetch articles' });
        } else {
            res.status(200).json({ articles: docs })
        }
    })
}

function readAll (req, res){
    let query = {};
    if(req.query.user){
        query.user = req.email;
    }

    Post.find(query).sort('-postedOn').exec( (err, docs)=>{
        if (err) {
            return res.status(402).json({ err: 'Failed to fetch tasks' });
        } else {
            return res.status(200).json({ articles: docs });
        }
    })
}

module.exports = {
    createComment,
    readArticleComments,
    updateComment,
    deleteComment,
    readArticle,
    createArticle,
    deleteArticle,
    updateArticle,
    readUserArticles,
    readAll,
}
