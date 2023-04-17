import React from 'react';
import { Data } from '../components/Types/types';
import './Products.css';
import { useAppDispatch } from '../store/hooks';
import { setID, setModalOpen } from '../store/slice/homeModalSlice';

interface ProductProps {
  product: Data;
}

export const Product = (props: ProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      role="openModal"
      className="product__item"
      onClick={() => {
        dispatch(setID(props.product.id));
        dispatch(setModalOpen());
      }}
    >
      <div
        className="product__img"
        style={{ backgroundImage: `url(${props.product.urls.thumb})` }}
      ></div>
    </div>
  );
};
