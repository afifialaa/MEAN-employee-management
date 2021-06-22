const User = require('../models/user.model');
const Task = require('../models/tasks.model');

let debugTask = require('debug')('worker:debugTask');

const createTask = (req, res) => {
    let taskObj = {
        user: req.email,
        name: req.body.name,
        project: req.body.project,
        status: 'not done',
        dueDate: req.body.dueDate
    }

    debugTask('Task is: ', taskObj);

    let task = new Task(taskObj);

    task.save((err, task) => {
        if (err) {
            debugTask('err: failed to add task', err);
            return res.json({ err: 'Failed to add task' });
        } else {
            debugTask('Task as added');
            return res.json({ msg: 'Task was added' });
        }
    })
}

const updateTask = (req, res) => {
    User.findOneAndUpdate({ user: req.email, 'tasks._id': req.body.id }, { "tasks.$.name": req.body.name, "tasks.$.project": req.body.project }, (err) => {
        if (err) {
            res.status(402).json({ err: 'Failed to update task' });
        } else {
            res.status(200).json({ msg: 'Task updated' });
        }
    });
}

const deleteTask = (req, res) => {
    debugTask('id is ', req.query.taskId);
    Task.findByIdAndRemove(req.query.taskId, err => {
        if(err){
            debugTask('Failed to delete task: ', err);
            return res.json({err: 'Failed to delete task'});
        }else{
            debugTask('Task was deleted');
            return res.json({msg: 'Task was deleted'});
        }
    });
}

const fetchTasks = (req, res) => {
    Task.find({ user: req.email }, (err, docs) => {
        if (err) {
            debugTask('Failed to fetch tasks');
            res.status(402).json({ err: 'Failed to fetch tasks' });
        } else {
            debugTask('Tasks were fetched');
            res.status(200).json({ tasks: docs });
        }
    })
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    fetchTasks
}