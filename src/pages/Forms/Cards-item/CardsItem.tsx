import React, { Component } from 'react';
import './CardsItem.css';
import { FormProduct as Props} from '../Forms';


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
          I'm not ROBOT: {this.props.norobot ? 'Made by Human' : ''}
        </div>
        <div className="cards__sale">Sale: {this.props.sale ? '50%' : '0%'}</div>
        <div className="cards__price">{this.props.price}$</div>
      </div>
    );
  }
}
