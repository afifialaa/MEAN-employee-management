const Department = require('../database/models/department-model')


function createTeam(req, res){
    let team = {
        name: req.body.teamName,
        leader: req.body.teamLeader,
        department: req.body.departmentId
    }

}

function queryTeam(req, res){}

function updateTeam(req, res){}

function deleteTeam(req, res){}

module.exports = {

}