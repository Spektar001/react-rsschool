import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__body">
            <p className="footer__year">2023</p>
          </div>
        </div>
      </footer>
    );
  }
}
