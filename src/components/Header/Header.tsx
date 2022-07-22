import React, { useEffect, useState } from 'react';
import { menu } from '~/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { Switch } from '@nextui-org/react';
import ItemMenu from './ItemMenu';
import LoginModal from '../AuthComponent/LoginModal';

interface IHeaderProps {
  setMode: () => void;
}
const Header = ({ setMode }: IHeaderProps) => {
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const time = new Date().getHours();
    if ([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].includes(time)) {
      setChecked(true);
    }
  }, []);
  return (
    <>
      <nav className='navbar navbar-expand-md py-1 shadow'>
        <div className='container'>
          <Link to='/' className='navbar-brand d-flex align-items-center'>
            {' '}
            <strong className='logo fs-2'>iConnect</strong>
          </Link>
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
              {/* <ItemMenu
                href='/login'
                name='Login'
                active={location.pathname === '/login' ? true : false}
              /> */}
              <li className='nav-item'>
                <span className='nav-link '>
                  <Switch
                    onChange={setMode}
                    className='mt-2'
                    checked={checked}
                    size='xs'
                    iconOn={<FontAwesomeIcon icon={faSun} />}
                    iconOff={<FontAwesomeIcon icon={faMoon} />}
                  />
                </span>
              </li>
              <li className='nav-item'>
                <div className='h-100 d-flex justify-content-center align-items-center ms-3'>
                  <LoginModal />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
