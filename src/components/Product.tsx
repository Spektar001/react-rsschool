import React from 'react';
import { Data } from '../components/Types/types';
import './Products.css';

interface ProductProps {
  product: Data;
  openModal: (id: string) => void;
}

export const Product = (props: ProductProps) => {
  return (
    <div
      role="openModal"
      className="product__item"
      onClick={() => {
        props.openModal(props.product.id);
      }}
    >
      <div
        className="product__img"
        style={{ backgroundImage: `url(${props.product.urls.thumb})` }}
      ></div>
    </div>
  );
};
