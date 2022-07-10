import React, { useEffect } from 'react';
import { menu } from '~/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { useLocation } from 'react-router-dom';
import { Switch } from '@nextui-org/react';
import ItemMenu from './ItemMenu';
const Header = () => {
  const location = useLocation();
  useEffect(() => console.log(location.pathname));
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-light  py-1'>
        <div className='container'>
          <a href='#' className='navbar-brand d-flex align-items-center'>
            {' '}
            <i className='fa fa-snowflake-o fa-lg text-primary mr-2'></i>
            <strong className='logo fs-3'>iConnect</strong>
          </a>
          <button
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='navbar-toggler'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div id='navbarSupportedContent' className='collapse navbar-collapse'>
            <ul className='navbar-nav ms-auto'>
              {menu.map((item, i) => (
                <ItemMenu
                  key={i}
                  href={item.href}
                  name={item.name}
                  active={location.pathname === item.href ? true : false}
                />
              ))}
              <ItemMenu
                href='/login'
                name='Login'
                active={location.pathname === '/login' ? true : false}
              />
              <li className='nav-item'>
                <a className='nav-link '>
                  <Switch
                    className='mt-1'
                    checked={true}
                    size='xs'
                    iconOn={<FontAwesomeIcon icon={faSun} />}
                    iconOff={<FontAwesomeIcon icon={faMoon} />}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
