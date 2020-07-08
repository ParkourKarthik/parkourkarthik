import React from 'react';

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
      <img src={project.imageUrl} alt={project.name} />
    </a>
  );
};

export default Project;