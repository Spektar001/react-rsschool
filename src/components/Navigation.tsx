import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Props, State } from './Types/types';

export default class Navigation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { text: location.pathname };
  }

  getTitleName() {
    this.setState({ text: location.pathname });
  }

  render() {
    return (
      <header className="navigation">
        <span className="nav__page">
          Page:{' '}
          {location.pathname === '/'
            ? 'home'
            : location.pathname === '/about'
            ? 'about'
            : location.pathname === '/forms'
            ? 'forms'
            : ''}
        </span>
        <NavLink
          onClick={this.getTitleName.bind(this)}
          className={({ isActive }) => (isActive ? 'nav__btn active' : 'nav__btn')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={this.getTitleName.bind(this)}
          className={({ isActive }) => (isActive ? 'nav__btn active' : 'nav__btn')}
          to="/about"
        >
          About us
        </NavLink>
        <NavLink
          onClick={this.getTitleName.bind(this)}
          className={({ isActive }) => (isActive ? 'nav__btn active' : 'nav__btn')}
          to="/forms"
        >
          Forms
        </NavLink>
      </header>
    );
  }
}
