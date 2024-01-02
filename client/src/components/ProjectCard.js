import React from 'react';
import '../styles/ProjectCard.css';

export default function ProjectCard({ project }){
  return (
    <a href={`/project/${project._id}`}>
        <p className='project-title'>{project.title}</p>
        <p className='project-descreption'>{project.description}</p>
        <p className='project-staff-number'><b>{project.staff.length}</b> People on this project</p>
    </a>
  )
}
