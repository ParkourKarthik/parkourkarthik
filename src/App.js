import React from 'react';
import './App.css';

function App() {
  const Projects = () => {
    const projects = [
      {
        name: 'SIMPLE SCHEDULER',
        url: 'https://github.com/ParkourKarthik/simplescheduler'
      },
      {
        name: 'EMPLOYEE REVIEW',
        url: 'https://github.com/ParkourKarthik/EmployeeReview'
      },
      {
        name: 'CORDOVA HELPER',
        url: 'https://github.com/ParkourKarthik/cordova-helper'
      },
      { name: 'SHIP GAME', url: 'https://github.com/ParkourKarthik/ship-game' }
    ];
    return projects.map(x => (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={x.url}
        class='project-tile'
      >
        {x.name}
      </a>
    ));
  };
  return (
    <div className='App'>
      <nav id='navbar'>
        <ul>
          <li>
            <a href='#welcome-section'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>

      <section id='welcome-section' class='welcome-section'>
        <h1>Hey I am Karthik,</h1>
        <p>a full stack web developer</p>
      </section>
      <section id='projects'>
        <h2>Here are some of my Personal Projects</h2>
        <div class='projects-grid'>
          <Projects />
        </div>
      </section>
      <section id='contact'>
        <a
          id='profile-link'
          href='https://github.com/parkourkarthik'
          target='_blank'
          rel='noopener noreferrer'
          class='btn contact-details'
        >
          <i class='fab fa-github'></i> GitHub
        </a>
      </section>
    </div>
  );
}

export default App;
