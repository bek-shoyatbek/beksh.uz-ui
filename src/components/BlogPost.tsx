import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/BlogPost.module.css';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, excerpt, link }) => {
  return (
    <div className={styles.blogPost}>
      <h2>{title}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.excerpt}>{excerpt}</p>
      <Link to={link} className={styles.readMore}>
        Read More
      </Link>
    </div>
  );
};

export default BlogPost;