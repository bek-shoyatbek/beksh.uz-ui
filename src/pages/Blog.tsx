import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Blog.module.css';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    date: '2024-03-15',
    excerpt: 'Exploring upcoming technologies and methodologies that will shape the web development landscape in the near future.',
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'Optimizing React Applications for Performance',
    date: '2024-02-28',
    excerpt: 'Tips and techniques to improve the speed and efficiency of your React-based web applications.',
    category: 'React'
  },
  {
    id: '3',
    title: 'Introduction to TypeScript: Why and How to Use It',
    date: '2024-02-10',
    excerpt: 'A beginner-friendly guide to understanding TypeScript and its benefits in modern JavaScript development.',
    category: 'TypeScript'
  },
  // Add more blog posts as needed
];

const Blog: React.FC = () => {
  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.blogList}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogPost}>
            <div className={styles.postContent}>
              <span className={styles.category}>{post.category}</span>
              <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
              <div className={styles.postMeta}>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className={styles.readMore}>
                Read more
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;