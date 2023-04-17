import React from 'react';
import './HomeModal.css';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setModalClose } from '../../../store/slice/homeModalSlice';
import { useSearchItemQuery } from '../../../store/unsplashAPI/unsplash.api';

export const HomeModal = () => {
  const dispatch = useAppDispatch();
  const itemID = useAppSelector((state) => state.homeModalSlice.id);
  const isModalOpen = useAppSelector((state) => state.homeModalSlice.isModalOpen);

  const { isFetching, data } = useSearchItemQuery(itemID);

  return (
    <div
      role="backgroundClose"
      className={`homeModal__container ${isModalOpen && 'homeModal__container_open'}`}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        dispatch(setModalClose());
      }}
    >
      <div className="homeModal">
        {isFetching
          ? 'Loading...'
          : data?.id && (
              <div className="homeModal__content">
                <div className="homeModal__box">
                  <div
                    className="homeModal__image"
                    style={{
                      backgroundImage: `url(${data && data.urls.regular})`,
                    }}
                  ></div>
                  <div className="homeModal__info">
                    <div className="homeModal__info_user">
                      <p>{data && (data.user.name || 'Unknown username')}</p>
                    </div>
                    <p>
                      <span className="info__category">Location:</span>{' '}
                      {data && (data.user.location || 'Unknown location')}
                    </p>
                    <div className="homeModal__info_desc">
                      <span className="info__category">About:</span>{' '}
                      {data && (data.alt_description || 'Unknown description')}
                    </div>
                    <div className="homeModal__info_likes">
                      <span className="info__category">Likes:</span> {data && data.likes}❤️
                    </div>
                  </div>
                </div>
                <button
                  role="homeModalClose"
                  className="closeModal"
                  onClick={() => dispatch(setModalClose())}
                >
                  X
                </button>
              </div>
            )}
      </div>
    </div>
  );
};
