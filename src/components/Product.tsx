import React from 'react';
import { IProduct } from './Types/types';
import './Products.css';

interface ProductProps {
  product: IProduct;
}

export const Product = (props: ProductProps) => {
  return (
    <div className="product__item">
      <div className="product__category">{props.product.category}</div>
      <img src={props.product.image} className="product__img" alt={props.product.title} />
      <div className="product__footer">
        <div className="product__title">{props.product.title}</div>
        <div className="product__price">{props.product.price}$</div>
      </div>
    </div>
  );
};
