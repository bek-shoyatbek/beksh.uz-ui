import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/BlogPost.module.css';

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  content: string;
}

const blogPosts: BlogPostData[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    date: '2024-03-15',
    content: `
      <p>As we move further into 2024, the landscape of web development continues to evolve at a rapid pace. Here are some key trends to watch:</p>
      
      <h2>1. AI-Driven Development</h2>
      <p>Artificial Intelligence is increasingly being integrated into development tools, helping developers write code more efficiently and catch bugs earlier in the development process.</p>
      
      <h2>2. WebAssembly</h2>
      <p>WebAssembly is gaining traction, allowing developers to run high-performance applications in web browsers at near-native speed.</p>
      
      <h2>3. Serverless Architecture</h2>
      <p>Serverless computing continues to grow, offering developers a way to build and run applications without managing infrastructure.</p>
      
      <p>As web developers, it's crucial to stay updated with these trends to create cutting-edge applications that meet the evolving needs of users and businesses alike.</p>
    `
  },
  // Add more blog posts as needed
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <div className={styles.notFound}>Blog post not found</div>;
  }

  return (
    <article className={styles.blogPost}>
      <h1>{post.title}</h1>
      <time className={styles.date} dateTime={post.date}>
        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default BlogPost;