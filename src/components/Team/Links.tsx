import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faMailForward } from '@fortawesome/free-solid-svg-icons';

const Links = ({ facebook, github, email }: any) => {
  return (
    <div className='header-socials' style={{ background: '#292929' }}>
      <a href={facebook} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faMailForward} />
      </a>

      <a href={github} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faMailForward} />
      </a>

      <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faMailForward} />
      </a>
    </div>
  );
};

export default Links;
