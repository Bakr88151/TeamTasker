import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Home.css';

const Home = ({ user }) => {
    const [projects, setProjects] = useState([]);

  useEffect(() => {

    const fetchUserTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/usertasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };
    if (user != null){
      fetchUserTasks();
    }

  }, [user]);
  return (
<>
      {user ? (
        <div className='Home'>
          <h1 className='welcom'>Welcome, {user.username}!</h1>
          <h2>Your Projects:</h2>
          {projects.length > 0 ? (
            <div className='project-cards'>
              {projects.map((project) => (
                <div key={project._id} className='Project-card-container'>{<ProjectCard project={project}/>}</div>
              ))}
            </div>
          ) : (
            <h3>No tasks at the moment.</h3>
          )}
        </div>
      ) : (
        <h1>
          Click on <a href="/login">Login</a>!
        </h1>
      )}
    </>
)
}

export default Home