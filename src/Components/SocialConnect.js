import React from 'react';

const SocialConnect = props => {
  return (
    <div>
      <a
        id={props.id}
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
        className='btn contact-details'
      >
        <i className={`fab ${props.icon}`}></i> {props.name}
      </a>
    </div>
  );
};

export default SocialConnect;
