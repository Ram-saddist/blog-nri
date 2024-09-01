// src/components/Home.js
import React, { useEffect, useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPosts(data.posts.slice(0, 2))); // Show first two posts as featured
  }, []);

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>Discover my thoughts, stories, and ideas!</p>
      <h2>Featured Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={`/posts/${post.id}`}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
