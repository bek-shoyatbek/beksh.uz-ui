import React, { useState, useEffect } from 'react';
import api from '../api';
import styles from '../styles/AdminPanel.module.css';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  publishedAt: string;
}

const AdminPanel: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get<BlogPost[]>('/posts');
      setPosts(response.data);
    } catch (err) {
      setError('Failed to fetch posts. Please try again.');
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const createPost = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await api.post('/articles', newPost);
      setNewPost({});
      fetchPosts();
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const updatePost = async (id: string, updatedPost: Partial<BlogPost>) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.put(`/posts/${id}`, updatedPost);
      fetchPosts();
    } catch (err) {
      setError('Failed to update post. Please try again.');
      console.error('Error updating post:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.delete(`/posts/${id}`);
      fetchPosts();
    } catch (err) {
      setError('Failed to delete post. Please try again.');
      console.error('Error deleting post:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.adminPanel}>
      <h1>Admin Panel</h1>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.newPost}>
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title || ''}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content || ''}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Excerpt"
          value={newPost.excerpt || ''}
          onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newPost.category || ''}
          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
        />
        <button onClick={createPost} disabled={isLoading}>Create Post</button>
      </div>
      <div className={styles.postList}>
        <h2>Existing Posts</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button onClick={() => updatePost(post.id, { title: post.title + ' (Updated)' })} disabled={isLoading}>
                Update
              </button>
              <button onClick={() => deletePost(post.id)} disabled={isLoading}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPanel;