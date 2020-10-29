import React from 'react';
import './App.css';
import TiltComponent from './Components/TiltComponent';
import Project from './Components/Project';
import { projects, socialConnects } from './Constants';
import SocialConnect from './Components/SocialConnect';
import CustomCursor from "./Components/CustomCursor";

function App() {
  const Projects = () => {
    return projects.map((x, i) => <TiltedProject project={x} key={i} />);
  };

  const SocialConnects = () => {
    return socialConnects.map((x, i) => <SocialConnect {...x} key={i} />);
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
      <CustomCursor />
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
          <SocialConnects />
        </div>
      </section>
      <footer>
        &copy; Made with <i className='fab fa-react'></i> by Karthik.
      </footer>
    </div>
  );
}

export default App;
