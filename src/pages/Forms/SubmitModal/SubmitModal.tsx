import './SubmitModal.css';
import React, { Component } from 'react';

interface Props {
  isOpen: boolean
}

export default class SubmitModal extends Component<Props> {
  render() {
    return (
      <div className="modal">
        <p className="modal__title">congratulations!</p>
        <p className="modal__text">Your data is saved</p>
      </div>
    )
  }
}
