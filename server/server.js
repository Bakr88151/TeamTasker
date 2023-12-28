const express = require('express');
const mongoose = require("mongoose");
const User = require("./models/User");
const Task = require('./models/Task');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://admin:admin@cluster0.2zggqyz.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.error(err)
})

// Get a user by Username\



// Create a new user
app.post('/newuser', async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch (err){
        if (err.code === 11000 && err.keyPattern && err.keyPattern.username){
            res.status(400).json({ error: 'Username already exists. Please choose a different username.' })
        }else {
            // Handle other errors
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
})

// Create a new Task
app.post('/newtask', async(req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    }catch (err){
        res.status(500).send(err)
    }
})

// Update an existing user


// Update the state of a task


// Delete a Task

app.listen(5000, () => {
    console.log('server is running on http://localhost:5000')
})