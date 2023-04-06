import React from 'react';
import { Data } from 'components/Types/types';
import './HomeModal.css';

interface ProductProps {
  modalItem: Data | undefined;
  setModalItemOpen: boolean;
  pendingModal: boolean;
  closeModal: () => void;
}

export const HomeModal = (props: ProductProps) => {
  return (
    <div
      className={`homeModal__container ${props.setModalItemOpen && 'homeModal__container_open'}`}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        props.closeModal();
      }}
    >
      <div className="homeModal">
        {props.pendingModal ? (
          'Loading...'
        ) : (
          <div className="homeModal__content">
            <div className="homeModal__box">
              <div
                className="homeModal__image"
                style={{
                  backgroundImage: `url(${props.modalItem && props.modalItem.urls.regular})`,
                }}
              ></div>
              <div className="homeModal__info">
                <div className="homeModal__info_user">
                  <p>{props.modalItem && (props.modalItem.user.name || 'Unknown username')}</p>
                </div>
                <p>
                  <span className="info__category">Location:</span>{' '}
                  {props.modalItem && (props.modalItem.user.location || 'Unknown location')}
                </p>
                <div className="homeModal__info_desc">
                  <span className="info__category">About:</span>{' '}
                  {props.modalItem && (props.modalItem.alt_description || 'Unknown description')}
                </div>
                <div className="homeModal__info_likes">
                  <span className="info__category">Likes:</span>{' '}
                  {props.modalItem && props.modalItem.likes}❤️
                </div>
              </div>
            </div>
            <button className="closeModal" onClick={() => props.closeModal()}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
