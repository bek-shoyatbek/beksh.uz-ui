import React from 'react';
import styles from '../styles/Blog.module.css';
import BlogPost from '../components/BlogPost';
const blogPosts = [
  {
    title: 'My First Blog Post',
    date: '2024-01-01',
    excerpt: 'This is a brief excerpt of my first blog post.',
    link: '/blog/my-first-blog-post',
  },
  {
    title: 'Learning React and TypeScript',
    date: '2024-02-15',
    excerpt: 'Sharing my experience learning React and TypeScript.',
    link: '/blog/learning-react-and-typescript',
  },
  // Add more blog posts as needed
];

const Blog: React.FC = () => {
  return (
    <div className={styles.blog}>
      <h1>My Blog</h1>
      <div className={styles.blogPosts}>
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;