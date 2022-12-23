const repository = require('../database/repository/task-repository')

async function createTask (req, res){
    let taskObj = {
        user: req.email,
        name: req.body.name,
        project: req.body.project,
        status: 'not done',
        dueDate: req.body.dueDate
    }

    console.log(taskObj)

    repository.createTask(taskObj).then(
        data => {
            return res.status(201).json({msg: 'Task was created'})
        },
        err => {
            return res.status(500).json({msg: 'Failed to create task'})
        }
    )
}

async function updateTask (req, res) {
    let qeury = {
        _id: req.body.id
    }

    let newData = req.body

    repository.updateTask(query, newData).then(
        data => {

        },
        err => {

        }
    )
}


async function deleteTask (req, res) {
    let query = {
        _id: req.query.taskId
    }

    repository.deleteTask(query).then(
        data => {
            return res.status(200).json({msg: 'Task was deleted'})

        },
        err => {
            return res.status(500).json({msg: 'Failed to delete task'})
        }
    )
}

async function readTask(req, res) {}

module.exports = {
    readTask,
    createTask,
    updateTask,
    deleteTask,
}