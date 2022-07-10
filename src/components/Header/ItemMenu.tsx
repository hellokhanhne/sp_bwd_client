import React from 'react';
import { Link } from 'react-router-dom';
const ItemMenu = ({ href, name, active }: { href: string; name: string; active: boolean }) => {
  return (
    <li className={`nav-item nav-hover ${active ? 'active' : ''}`}>
      <Link to={href} className={`nav-link fst-italic fs-5 fw-500 ${active ? 'text-primary' : ''}`}>
        {' '}
        {name}{' '}
      </Link>
    </li>
  );
};

export default ItemMenu;
