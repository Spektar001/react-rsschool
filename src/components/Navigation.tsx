import './Navigation.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const [, setPathname] = useState('');

  function getTitleName() {
    setPathname(location.pathname);
  }

  return (
    <header className="navigation">
      <span className="nav__page">
        Page:
        {location.pathname === '/'
          ? ' home'
          : location.pathname === '/about'
          ? ' about'
          : location.pathname === '/forms'
          ? ' forms'
          : ''}
      </span>
      <NavLink
        onClick={getTitleName}
        className={({ isActive }) => (isActive ? 'nav__btn active' : 'nav__btn')}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={getTitleName}
        className={({ isActive }) => (isActive ? 'nav__btn active' : 'nav__btn')}
        to="/about"
      >
        About us
      </NavLink>
      <NavLink
        onClick={getTitleName}
        className={({ isActive }) => (isActive ? 'nav__btn active' : 'nav__btn')}
        to="/forms"
      >
        Forms
      </NavLink>
    </header>
  );
};
