import React from 'react';
import styles from '../styles/Projects.module.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubLink: "https://github.com/bek-shoyatbek/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.netlify.app",
    image: "/images/ecommerce-project.jpg"
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks and projects with real-time updates.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    githubLink: "https://github.com/bek-shoyatbek/task-manager",
    image: "/images/task-manager.jpg"
  },
  {
    title: "Weather Forecast API",
    description: "RESTful API for retrieving weather forecasts, integrating data from multiple weather services.",
    technologies: ["Node.js", "Express", "Jest", "OpenWeatherMap API"],
    githubLink: "https://github.com/bek-shoyatbek/weather-api",
    liveLink: "https://weather-forecast-api.herokuapp.com",
    image: "/images/weather-api.jpg"
  }
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <h1>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>GitHub</a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;