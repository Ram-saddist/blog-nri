// src/components/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const foundPost = storedPosts.find((p) => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div>{post.content}</div>
    </div>
  );
}

export default BlogPost;
