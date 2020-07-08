import React, { useEffect, useRef } from 'react';
import './App.css';

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
        className={`project-tile ${project.mobile && 'mobile'}`}
        // style={{
        //   backgroundImage: `url(${project.imageUrl})`,
        //   backgroundSize: '100%'
        // }}
      >
        <div className='project-title'>
        <div>{project.name}</div>
        <div className='project-seperator'></div>
        <div className='project-skills'>{project.techs}</div>
        </div>
        <img src={project.imageUrl} alt={project.name}/>
      </a>
    );
  };

  const WelcomeNote = props => {
    const { forwardedRef } = props;
    return (
      <div ref={forwardedRef} id='welcome-note'>
        <h1>Hey I am Karthik,</h1>
        <p>a full stack web developer.</p>
        <p className="sub-text">An enthusiastic developer who loves solving problems, sticking to a never ending learning curve.</p>
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
