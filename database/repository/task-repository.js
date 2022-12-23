const Task = require('../models/task-model')

function createTask(taskObj){

    let task = new Task(taskObj)

    return new Promise((resolve, reject)=>{
        task.save((err, task)=>{
            if(err){
                reject()
            }
            resolve()
        })
    })
}

function readTask(query){
    return new Promise((resolve, reject)=>{
        Task.find(query, (err, result)=>{
            if(err){
                reject()
            }

            resolve(result)
        })
    })

}

function updateTask(qeury, newData){
    return new Promise((resolve, reject)=>{
        Task.findOneAndUpdate(query, newData, err => {
            if(err){
                reject()
            }
            resolve()
        })
    })
}

function deleteTask(query){
    return new Promise((resolve, reject)=>{
        Task.findOneAndDelete({_id: query.id}, err=>{
            if(err){
                reject()
            }

            resolve()
        })

    })
}

module.exports = {
    createTask,
    readTask,
    updateTask,
    deleteTask
}