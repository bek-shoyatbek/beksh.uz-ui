import React from 'react';
import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    link: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <h1>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;