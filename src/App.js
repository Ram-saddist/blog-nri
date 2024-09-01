// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import BlogPosts from './components/BlogPosts';
import Contact from './components/Contact';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">Blog Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<BlogPosts />} />
        <Route path="/posts/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
