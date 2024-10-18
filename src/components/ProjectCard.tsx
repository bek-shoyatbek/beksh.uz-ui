import React from 'react';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className={styles.projectCard}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;