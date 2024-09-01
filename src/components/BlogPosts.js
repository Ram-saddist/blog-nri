// src/components/BlogPosts.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', summary: '', content: '' });

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    if (storedPosts.length > 0) {
      setPosts(storedPosts);
    } else {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.posts);
          localStorage.setItem('posts', JSON.stringify(data.posts));
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPost = () => {
    const updatedPosts = [
      ...posts,
      {
        id: posts.length + 1,
        ...newPost,
        date: new Date().toISOString().split('T')[0],
      },
    ];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setNewPost({ title: '', summary: '', content: '' });
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>

      <h2>Add a New Post</h2>
      <div>
        <label>
          Title:
          <input type="text" name="title" value={newPost.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Summary:
          <input type="text" name="summary" value={newPost.summary} onChange={handleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" value={newPost.content} onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
    </div>
  );
}

export default BlogPosts;
