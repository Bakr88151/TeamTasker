const express = require('express');
const mongoose = require("mongoose");
const User = require("./models/User");
const Task = require('./models/Task');
const Project = require('./models/Project')
const cors = require('cors');
const md5Hash = require('./helpers')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://admin:admin@cluster0.2zggqyz.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.error(err)
})

// login:
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user in the database by username
        const user = await User.findOne({ username });

        // If user not found, return an error
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the stored password with the provided password after hashing
        const hashedPassword = md5Hash(password);

        if (user.password !== hashedPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // If credentials are valid, return the user details
        res.status(200).json(user);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new user
app.post('/newuser', async(req, res) => {
    try {
        const user = await User.create({ username: req.body.username, password: md5Hash(req.body.password) })
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

// Crerate a new Project
app.post('/newproject', async(req, res) => {
    try {
        // Extract necessary fields from the request body
        const { title, description, issuer} = req.body;
        // const issuerobj = User.findOne({'_id':issuer})

        // if (!issuerobj){
        //     res.status(500).send('no user')
        // }
    
        // Create the task with the provided references
        const project = await Project.create({
          title,
          description,
          issuer : issuer, // MongoDB ObjectId reference for the issuer user
          staff: issuer // Array of MongoDB ObjectId references for staff members
        });
    
        res.status(200).json(project);
      } catch (err) {
        res.status(500).send(err);
      }
})

// get all the projects where the user is a staff member:
app.post('/usertasks', async (req, res) => {
    try {
      // Assuming the client sends user information in the request body
      const { _id, username, password, rank } = req.body;
  
      // Find the user in the database based on the provided information
      const user = await User.findOne({ _id, username, password, rank });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Retrieve tasks associated with the user
      const projects = await Project.find({ staff: { $in: [_id] } }).exec();
  
      // Return the tasks to the client
      res.json({ projects });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

// Update an existing user


// Update the state of a task


// Delete a Task

app.listen(5000, () => {
    console.log('server is running on http://localhost:5000')
})