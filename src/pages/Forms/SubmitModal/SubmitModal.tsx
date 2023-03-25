import './SubmitModal.css';
import React, { Component } from 'react';

interface Props {
  isOpen: boolean;
  close: () => void;
}

export default class SubmitModal extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={`modal ${this.props.isOpen && 'show__modal'}`}>
        <div className={`modal__content ${this.props.isOpen && 'show__modal'}`}>
          <p className="modal__title">congratulations!</p>
          <p className="modal__text">Your data is saved</p>
          <button className="modal__btn" onClick={this.props.close}>
            CLOSE
          </button>
        </div>
      </div>
    );
  }
}
