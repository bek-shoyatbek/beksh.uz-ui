import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Bek Shoyatbek</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/bek-shoyatbek" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/bek-shoyatbek" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/bek-shoyatbek" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;