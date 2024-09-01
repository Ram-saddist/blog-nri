// src/components/About.js
import React, { useEffect, useState } from 'react';

function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setAbout(data.about));
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      <img src={about.photo} alt="Profile" />
      <p>{about.bio}</p>
      <h2>Connect with me:</h2>
      <ul>
        <li><a href={about.social?.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href={about.social?.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href={about.social?.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  );
}

export default About;
