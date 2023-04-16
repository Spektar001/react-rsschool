import './SubmitModal.css';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setModalClose } from '../../../store/slice/formSlice';

export const SubmitModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.formSlice.isOpen);

  return (
    <div className={`modal ${isModalOpen && 'show__modal'}`}>
      <div className={`modal__content ${isModalOpen && 'show__modal'}`}>
        <p className="modal__title">congratulations!</p>
        <p className="modal__text">Your data is saved</p>
        <button
          role="formModalClose"
          className="modal__btn"
          onClick={() => dispatch(setModalClose())}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};
