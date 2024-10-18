import React from 'react';
import styles from '../styles/Main.module.css';

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>Welcome to My Software Engineering Blog</h1>
      <p>I'm a passionate software engineer with expertise in web development.</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/bek-shoyatbek" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/bek-shoyatbek" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/bek-shoyatbek" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default Main;