import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ''}>Blog</NavLink>
        <NavLink to="/animes" className={({ isActive }) => isActive ? styles.active : ''}>Animes</NavLink>
      </nav>
    </header>
  );
};

export default Header;