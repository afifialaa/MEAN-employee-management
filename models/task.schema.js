const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projects = [
    'personal',
    'other'
]

let TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    dueDate:{
        type: Date
    },
    status: {
        type: String,
        enum: ['done', 'late', 'not done']
    }
});

module.exports = TaskSchema;