import React, { Component } from 'react';
import './CardsItem.css';
import image1 from '../../../assets/data-img/item_1.jpg'; //временно

export default class CardsItem extends Component {
  render() {
    return (
      <div className="cards__item">
        <div className="cards__date">23-03-2023</div>
        <div className="cards__category">MEN'S CLOTHING</div>
        <img className="cards__img" src={image1} alt="qwe" />
        <div className="cards__title">Fjallraven - Foldsack No. 1</div>
        <div className="cards__not-robot">I'm not ROBOT: Made by Human</div>
        <div className="cards__sale">Sale: 50%</div>
        <div className="cards__price">123$</div>
      </div>
    );
  }
}

{
  /* <div className="cards__item">
<div className="cards__date">{this.props.card.date}</div>
<div className="cards__category">{this.props.card.category}</div>
<img className="cards__img" src={this.props.card.image} alt={this.props.card.title} />
<div className="cards__title">{this.props.card.title}</div>
<div className="cards__not-robot">I'm not ROBOT: Made by Human</div>
<div className="cards__sale">Sale:50%</div>
<div className="cards__price">{this.props.card.price}$</div>
</div> */
}
