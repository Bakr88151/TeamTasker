const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "Please Type title"],
        },
        Description: {
            type: String,
            require: false,
        },
        Priority: {
            type: String,
            enum: ['Top', 'Middle', 'Low'],
            default: "Middle",
        },
        importance: {
            type: Number,
            default: 0,
        },
        state: {
            type: String,
            enum: ['To-Do', 'On-going', 'Done'],
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
)

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;