const Article = require('../models/article.model');
const Comment = require('../models/comment.model');
let debugBlog = require('debug')('worker:debugBlog');

function createComment(req, res){
    let commentObj = {
        user: req.email,
        body: req.body.body,
        article_id: req.body.article_id,
        postedOn: new Date()
    }

    let comment = new Comment(commentObj)

    comment.save( (err, comment)=> {
        if(err){
            debugBlog('Failed to save comment', err);
            return res.json({err: 'Failed to save comment'}).status(403);
        }else{
            debugBlog('Comment was created');
            return res.json({msg: 'Comment was created'}).status(200);
        }
    })
}

function deleteComment(req, res){
    Comment.findByIdAndRemove(req.query.comment_id, err => {
        if(err){
            debugBlog('Failed to delete comment');
            return res.json({err: 'Failed to delete comment'});
        }else{
            debugBlog('Comment was deleted');
            return res.json({msg: 'Comment was deleted'});
        }
    });
}

function fetchComments(req, res){
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

module.exports = {
    createComment,
    deleteComment,
    fetchComments
}