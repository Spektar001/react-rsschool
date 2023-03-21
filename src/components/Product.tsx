import React, { Component } from 'react';
import { IProduct } from './Types/types';
import './Products.css';

interface ProductProps {
  product: IProduct;
}

export class Product extends Component<ProductProps> {
  render() {
    return (
      <div className="product__item">
        <div className="product__category">{this.props.product.category}</div>
        <img
          src={this.props.product.image}
          className="product__img"
          alt={this.props.product.title}
        />
        <div className="product__footer">
          <div className="product__title">{this.props.product.title}</div>
          <div className="product__price">{this.props.product.price}$</div>
        </div>
      </div>
    );
  }
}
