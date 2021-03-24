const User = require('../models/user.model');

let debugTask = require('debug')('worker:debugTask');

function createTask(req, res){
    let task = {
        name: req.body.name,
        project: req.body.project,
        status: 'not done',
        dueDate: req.body.dueDate
    }

    debugTask('Task is: ', task);

    User.updateOne({ email: req.email}, { $push: { tasks: task } }, (err, result) => {
        if(err){
            debugTask('failed to add task');
            res.status(402).json({err: 'Failed to add task'});
        }else{
            debugTask('task inserted');
            res.status(200).json({msg: 'Task inserted'});
        }
    })
}

function updateTask(req, res){
    console.log('updating tassk');
    User.findOneAndUpdate({ email : req.email, 'tasks._id' : req.body.id }, { "tasks.$.name" : req.body.name, "tasks.$.project": req.body.project }, (err)=> {
        if(err){
            res.status(402).json({err: 'Failed to update task'});
        }else{
            res.status(200).json({msg: 'Task updated'});
        }
    });
}

function deleteTask(req, res){
    debugTask('id is ', req.query.taskId);
    User.updateOne({email: req.email},
                        {
                            $pull: {
                                tasks: {_id: '605a29c5d3ff8a0bf0d3c170'}
                        }
                    },  {safe:true}, (err)=>{
        if(err){
            debugTask('Failed to remove task');
            res.status(402).json({err: 'Failed to remove task'});
        }else{
            debugTask('Task was removed');
            res.status(200).json({msg: 'Task was removed'});
        }
    })
}

function fetchTasks(req, res){
    User.find({email: req.email}, {tasks: 1}, (err, docs)=>{
        if(err){
            res.status(402).json({err: 'Failed to fetch tasks'});
        }else{
            res.status(200).json({tasks: docs[0]});
        }
    })
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    fetchTasks
}