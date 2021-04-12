
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    article_id: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
    }
})

let Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;