import React, { useState, useEffect } from 'react';

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

    fetchUserTasks();
  }, [user]);
  return (
<>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <h2>Your Tasks:</h2>
          {projects.length > 0 ? (
            <ul>
              {projects.map((project) => (
                <li key={project._id}>{project.title + project.description}</li>
              ))}
            </ul>
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