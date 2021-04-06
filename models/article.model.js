
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
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
    postedOn: {
        type: Date,
    }
})

let Article = mongoose.model('Blog', ArticleSchema);
module.exports = Article;