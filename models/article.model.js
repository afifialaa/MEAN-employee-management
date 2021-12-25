
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = require('./comment.schema');

const PostSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    postedOn: {
        type: Date,
    },
    comments: [CommentSchema]
})

let Post = mongoose.model('Blog', PostSchema);
module.exports = Post;
