import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const Projects = () => {
    const projects = [
      {
        name: 'SIMPLE SCHEDULER',
        url: 'https://github.com/ParkourKarthik/simplescheduler',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/85940522-8b07b000-b93a-11ea-8f0f-6b0bf9ce76f8.png'
      },
      {
        name: 'EMPLOYEE REVIEW',
        url: 'https://github.com/ParkourKarthik/EmployeeReview',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/85940522-8b07b000-b93a-11ea-8f0f-6b0bf9ce76f8.png'
      },
      {
        name: 'CORDOVA HELPER',
        url: 'https://github.com/ParkourKarthik/cordova-helper',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/85940522-8b07b000-b93a-11ea-8f0f-6b0bf9ce76f8.png'
      },
      {
        name: 'SHIP GAME',
        url: 'https://github.com/ParkourKarthik/ship-game',
        imageUrl:
          'https://user-images.githubusercontent.com/9585305/85940522-8b07b000-b93a-11ea-8f0f-6b0bf9ce76f8.png'
      }
    ];
    return projects.map((x, i) => <TiltedProject project={x} key={i} />);
  };
  function TiltComponent(Comp) {
    const Tilt = props => {
      const ref = useRef(null);
      const handleMove = e => {
        const xVal = e.layerX;
        const yVal = e.layerY;
        const height = ref.current.clientHeight;
        const width = ref.current.clientWidth;
        const xRotation = 20 * ((yVal - height / 2) / height);
        const yRotation = -20 * ((xVal - width / 2) / width);

        const transString = `perspective(800px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        ref.current.style.transform = transString;
      };

      useEffect(() => {
        const el = ref.current;
        ref.current.classList.add('boxShadow');
        /* Get the height and width of the element */
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseout', () => {
          el.style.transform =
            'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        });
        el.addEventListener('mousedown', () => {
          el.style.transform =
            'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
        });
        el.addEventListener('mouseup', () => {
          el.style.transform =
            'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
        });
      }, []);
      return <Comp {...props} forwardedRef={ref} />;
    };
    return Tilt;
  }

  const Project = props => {
    const { forwardedRef, project } = props;
    return (
      <a
        ref={forwardedRef}
        target='_blank'
        rel='noopener noreferrer'
        href={project.url}
        className='project-tile'
        // style={{
        //   backgroundImage: `url(${project.imageUrl})`,
        //   backgroundSize: '100%'
        // }}
      >
        <div style={{fontWeight: 900, marginBottom: '10px'}}>{project.name}</div>
        <img src={project.imageUrl} alt={project.name}/>
      </a>
    );
  };

  const WelcomeNote = props => {
    const { forwardedRef } = props;
    return (
      <div ref={forwardedRef} id='welcome-note'>
        <h1>Hey I am Karthik,</h1>
        <p>a full stack web developer</p>
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
        <a
          id='profile-link'
          href='https://github.com/parkourkarthik'
          target='_blank'
          rel='noopener noreferrer'
          className='btn contact-details'
        >
          <i className='fab fa-github'></i> GitHub
        </a>
      </section>
    </div>
  );
}

export default App;
