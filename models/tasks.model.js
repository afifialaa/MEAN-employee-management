const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    user: {
        type: String,
        required: true
    },
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
})

let Task = mongoose.model('Task', TaskSchema);

module.exports = Task;