const express = require('express')
const mongoose = require("mongoose")
const User = require("./models/User")
const Task = require('./models/Task')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://admin:admin@cluster0.2zggqyz.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.error(err)
})

// Create a new user
app.post('/newuser', async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch (err){
        res.status(500).send(err)
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

app.post('/newtask', async(req, res) => {})

app.listen(5000, () => {
    console.log('server is running on http://localhost:5000')
})