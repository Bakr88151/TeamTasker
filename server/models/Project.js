const mongoose = require("mongoose")

const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "Please input the Project's title"]
        },
        description: String,
        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        }],
        staff: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        issuer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          startdate: {
            type: Date,
            default: Date.now,
          },
    }
        
)



const Project = mongoose.model("Project", projectSchema);

module.exports = Project;