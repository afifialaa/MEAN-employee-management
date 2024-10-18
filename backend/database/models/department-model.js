const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const positionSchema = new Schema({
//     position_name: {
//         type: String,
//         lowercase: true
//     }
// })

const teamSchema = new Schema({
    team_name: {
        type: String,
        lowercase: true
    },
    team_leader: {
        type: String,
        lowercase: true
    }
})

// const departmentSchema = new Schema({
//     department_name: {
//         type: String,
//         index: true,
//         unique: true,
//         lowercase: true
//     },
//     department_head: {
//         type: String,
//         unique: true,
//         lowercase: true
//     },
//     teams: [{
//         team_name: {
//             type: String
//         },
//         team_leader: {
//             type: String
//         }
//     }]
// }, { timestamps: true })

const departmentSchema = new Schema({
    department_name: {
        type: String,
        index: true,
        unique: true,
        lowercase: true
    },
    department_head: {
        type: String,
        unique: true,
        lowercase: true
    }
})


const Department = mongoose.model('department', departmentSchema)

module.exports = Department
