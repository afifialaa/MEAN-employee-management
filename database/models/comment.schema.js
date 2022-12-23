const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
    }
})

module.exports = CommentSchema
