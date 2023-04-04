import React from 'react';
import { Data } from '../components/Types/types';
import './Products.css';

interface ProductProps {
  product: Data;
}

export const Product = (props: ProductProps) => {
  return (
    <div className="product__item">
      <div
        className="product__img"
        style={{ backgroundImage: `url(${props.product.urls.thumb})` }}
      ></div>
    </div>
  );
};
