import React from 'react';
import './App.css';
import TiltComponent from './Components/TiltComponent';
import Project from './Components/Project';

function App() {
  const Projects = () => {
    const projects = [
      {
        name: 'EMPLOYEE REVIEW',
        url: 'https://github.com/ParkourKarthik/EmployeeReview',
        techs: 'Reactjs, nodejs, Mongodb',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/86875085-54caed00-c0ff-11ea-9045-2a092a28441c.png'
      },
      {
        name: 'SIMPLE SCHEDULER',
        url: 'https://github.com/ParkourKarthik/simplescheduler',
        mobile: true,
        techs: 'ReactNative, nodejs, Mongodb',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/85940522-8b07b000-b93a-11ea-8f0f-6b0bf9ce76f8.png'
      },
      {
        name: 'COLOR CONFUSION',
        url: 'https://github.com/ParkourKarthik/ColorConfusion',
        mobile: true,
        techs: 'Kotlin',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/86947730-ce97c080-c169-11ea-967b-a603069adfaa.png'
      },
      {
        name: 'SHIP GAME',
        url: 'https://github.com/ParkourKarthik/ship-game',
        techs: 'HTML, JS, CSS',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/86877760-1cc6a880-c105-11ea-8dcb-29e1d7bb9e65.png'
      }
    ];
    return projects.map((x, i) => <TiltedProject project={x} key={i} />);
  };

  const WelcomeNote = props => {
    const { forwardedRef } = props;
    return (
      <div ref={forwardedRef} id='welcome-note'>
        <h1>Hey I am Karthik,</h1>
        <p>a full stack web developer.</p>
        <p className='sub-text'>
          An enthusiastic developer who loves solving problems, sticking to a
          never ending learning curve.
        </p>
      </div>
    );
  };

  const TiltedWelcomeNote = TiltComponent(WelcomeNote);
  const TiltedProject = TiltComponent(Project);

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

      <section id='welcome-section' className='welcome-section'>
        <TiltedWelcomeNote />
      </section>
      <section id='projects'>
        <h2>Here are some of my Personal Projects</h2>
        <div className='projects-grid'>
          <Projects />
        </div>
      </section>
      <section id='contact'>
      <h2>Find me on..</h2>
        <div className='contacts-container'>
          <a
            id='profile-link'
            href='https://github.com/parkourkarthik'
            target='_blank'
            rel='noopener noreferrer'
            className='btn contact-details'
          >
            <i className='fab fa-github'></i> GitHub
          </a>
          <a
            id='profile-link'
            href='https://twitter.com/Parkourkarthik'
            target='_blank'
            rel='noopener noreferrer'
            className='btn contact-details'
          >
            <i className='fab fa-twitter'></i> Twitter
          </a>
          <a
            id='profile-link'
            href='https://www.linkedin.com/in/karthikayan-pazhanivel-501a0051'
            target='_blank'
            rel='noopener noreferrer'
            className='btn contact-details'
          >
            <i className='fab fa-linkedin'></i> LinkedIn
          </a>
          <a
            id='profile-link'
            href='https://stackoverflow.com/users/3098008/parkourkarthik'
            target='_blank'
            rel='noopener noreferrer'
            className='btn contact-details'
          >
            <i className='fab fa-stack-overflow'></i> StackOverflow
          </a>
        </div>
      </section>
      <footer>&copy; Made with <i className='fab fa-react'></i> by Karthik.</footer>
    </div>
  );
}

export default App;
