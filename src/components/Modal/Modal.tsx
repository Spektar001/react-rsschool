import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  render() {
    return (
      <form className="modal__box">
        <div className="modal__content">
          <input className="modal__input" placeholder="Название продукта" type="text" />
          <input className="modal__input" placeholder="2" type="date" />
          <select className="modal__input">
            <option disabled>ВЫБОР КАТЕГОРИИ</option>
            <option value="MEN'S CLOTHING">MEN'S CLOTHING</option>
            <option value="JEWELERY">JEWELERY</option>
            <option value="ELECTRONICS">ELECTRONICS</option>
            <option value="OTHER">OTHER</option>
          </select>
          <input className="modal__input" placeholder="4" type="checkbox" />
          <div className="radio">
            <input className="modal__input" type="radio" />
            <input className="modal__input" type="radio" />
          </div>
          <input placeholder="6" type="file" />
          <button className="modal__btn" type="button">
            add card
          </button>
        </div>
      </form>
    );
  }
}
