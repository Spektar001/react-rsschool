import React, { Component } from 'react';
import './NotFoundPage.css';

export class NotFoundPage extends Component {
  render() {
    return (
      <div className="no-page">
        <p className="no-page__image" />
        <h2 className="no-page__text">Oops! There is no such page!</h2>
      </div>
    );
  }
}
