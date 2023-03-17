import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <span className="nav__page">Page:</span>
                <NavLink className={({ isActive }) => (isActive ? 'nav__btn active' : ' nav__btn')} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'nav__btn active' : ' nav__btn')} to="/about">
                    About us
                </NavLink>
            </div>
        );
    }
}
