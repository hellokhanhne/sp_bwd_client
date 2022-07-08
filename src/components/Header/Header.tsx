import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='d-flex align-items-center'>
        <div className='flex-1 d-flex align-items-center'>
          <div className='logo'>
            <h3>IConnect</h3>
          </div>
          <div className='nav'>
            <Link to='/' className='nav-item'>
              Features
            </Link>
          </div>
        </div>
        <button className='button button-primary'>Sign in</button>
      </div>
    </div>
  );
};

export default Header;
