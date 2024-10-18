const Department = require("../database/models/department-model");
const Team = require("../database/models/team-model");

// Create a new department
function createDepartment(req, res) {
  let departmentObj = {
    department_name: req.body.department_name,
    department_head: req.body.department_head,
  };

  let department = new Department(departmentObj);

  Department.create(department)
    .then(() => {
      res.status(201).json({ msg: "Department was created" });
    })
    .catch((error) => {
      console.log(error);
      res.status(409).json({ msg: "Failed to create department" });
    });
}

// query a department
function queryDepartment(req, res) {
  let query = req.query;
  Department.find(query)
    .then((departments) => res.status(200).json({ departments: departments }))
    .catch((error) =>
      res.status(404).json({ msg: "Failed to fetch departments" }),
    );
}

// update a department
function updateDepartment(req, res) {
  let departmentObj = {
    department_name: req.body.departmentName,
    department_head: req.body.departmentHead,
  };

  Department.findOneAndUpdate(
    { _id: req.body.department_id },
    departmentObj,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500);
      }
      console.log(result);
      return res
        .status(201)
        .json({ msg: "Department was updated successfully" });
    },
  );
}

// delete a department
function deleteDepartment(req, res) {
  let department_id = { _id: req.query.departmentId };

  Department.deleteOne({ _id: department_id }, function (err, result) {
    if (err) {
      return res.status(500).json({ msg: "Failed to delete department" });
    }
    return res.status(200).json({ msg: "Department was deleted successfully" });
  });
}

// Create a new team
function createTeam(req, res) {
  let team = {
    department_id: req.body.department_id,
    team_name: req.body.team_name,
    team_leader: req.body.team_leader,
  };

  let teamObj = new Team(team);

  Team.create(teamObj, (err, result) => {
    if (err) {
      console.log(err);
      if (err.code === 11000)
        return res.status(422).json({ msg: "Team already exists" });
      return res.status(500);
    }
    return res.status(201).json({ team: result });
  });
}

// query a department
function queryTeam(req, res) {
  Team.find()
    .where({ department_id: req.query.department_id })
    .then((teams) => res.status(200).json({ teams: teams }))
    .catch((error) =>
      res.status(404).json({ msg: "Failed to fetch departments" }),
    );
}

function deleteTeam(req, res) {
  let team = {
    _id: req.query.team_id,
  };

  Team.deleteOne(team, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: "Failed to delete team" });
    }
    return res.status(200).json({ msg: "Team was deleted successfully" });
  });
}

function createPosition(req, res) {
  console.log('creating position')
  let position = {
    department_id: req.body.department_id,
    team_id: req.body.team_id,
    position_name: req.body.position_name,
  };

  Team.findOneAndUpdate(
    { department_id: req.body.department_id, _id: req.body.team_id },
    { $push: { positions: position.position_name } },
    (err, result) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ msg: "Failed to create position" });
      } else {
        return res
          .status(200)
          .json({ msg: "Position was created successfully" });
      }
    },
  );
}

function deletePosition(req, res){
  let position = {
    position_name: req.query.position_name,
    team_id: req.query.team_id
  }

  Team.findOneAndUpdate({_id: position.team_id}, {$pull: {positions:position.position_name}}, (err, result)=>{
    if(err) {
      return res.status(500).json({msg: 'Failed to delete position'})
    }else if(result){
      return res.status(200).json({msg: 'Position was deleted successfully'})
    }
    return res.status(404).json({msg: 'Failed to delete position'})
  })
}

module.exports = {
  createDepartment,
  queryDepartment,
  updateDepartment,
  deleteDepartment,
  createTeam,
  deleteTeam,
  createPosition,
  queryTeam,
  deletePosition
};
