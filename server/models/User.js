const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            require: [true, "please enter username"],
            unique: [true, "User name already exist"],
        },
        password: {
            type: String,
            require: [true, "Please Enter Password"],
        },
        rank: {
            type: String,
            enum: ['Standard', 'Manager'],
            require: [true, "Please Enter The rank"]
        },
        email: {
            type: String,
            require: [true, "Please Enter email"]
        }
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;