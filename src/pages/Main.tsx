import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Main.module.css';

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1>Bek Shoyatbek</h1>
        <h2>Software Engineer & Web Developer</h2>
        <p>Crafting elegant solutions to complex problems</p>
        <div className={styles.cta}>
          <Link to="/projects" className={styles.primaryBtn}>View Projects</Link>
          <Link to="/blog" className={styles.secondaryBtn}>Read Blog</Link>
        </div>
      </section>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>I'm a passionate software engineer with expertise in web development, focusing on creating scalable and efficient applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver high-quality code and exceptional user experiences.</p>
      </section>

      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>SQL & NoSQL Databases</li>
          <li>RESTful APIs</li>
          <li>Git & Version Control</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2>Get in Touch</h2>
        <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/bek-shoyatbek" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/bek-shoyatbek" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/bek-shoyatbek" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>
    </div>
  );
};

export default Main;