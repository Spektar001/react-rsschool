import React, { Component } from 'react';
import './CardsItem.css';
import { FormProduct as Props } from '../Forms';

export default class CardsItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="cards__item">
        <div className="cards__date">{this.props.date}</div>
        <div className="cards__category">{this.props.category}</div>
        <div className="cards__img" style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <div className="cards__title">{this.props.title}</div>
        <div className="cards__not-robot">
          You are a man? - {this.props.norobot ? "✔️" : ""}
        </div>
        <div className="cards__sale">Sale: {this.props.sale}%</div>
        <div className="cards__price">{this.props.price}$</div>
      </div>
    );
  }
}
