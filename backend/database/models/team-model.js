const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  department_id: {
    type: String,
    required: true,
  },
  team_name: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  team_leader: {
    type: String,
    required: true,
  },
  positions: [
    {
      type: String,
    }
  ],
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
