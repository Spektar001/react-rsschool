import React from 'react';
import './CardsItem.css';
import { FormProduct as Props } from '../Forms';

export const CardsItem = (props: Props) => {
  return (
    <div className="cards__item">
      <div className="cards__date">{props.date}</div>
      <div className="cards__category">{props.category}</div>
      <div className="cards__img" style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className="cards__title">{props.title}</div>
      <div className="cards__not-robot">You are a man? - {props.norobot ? '✔️' : ''}</div>
      <div className="cards__sale">Sale: {props.sale}%</div>
      <div className="cards__price">
        <span className="cards__price_sale">{props.price}$</span>
      </div>
    </div>
  );
};
