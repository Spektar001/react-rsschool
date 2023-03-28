import './SubmitModal.css';
import React from 'react';

interface Props {
  isOpen: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubmitModal = (props: Props) => {
  return (
    <div className={`modal ${props.isOpen && 'show__modal'}`}>
      <div className={`modal__content ${props.isOpen && 'show__modal'}`}>
        <p className="modal__title">congratulations!</p>
        <p className="modal__text">Your data is saved</p>
        <button className="modal__btn" onClick={() => props.closeModal(false)}>
          CLOSE
        </button>
      </div>
    </div>
  );
};
