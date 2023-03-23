import React, { Component } from 'react';
import './Forms.css';
import CardsItem from './Cards-item/CardsItem';
import FormItem from './Form-item/FormItem';
import { Props } from 'components/Types/types';

export interface FormProduct {
  date: string;
  category: string;
  image: string | false;
  title: string;
  norobot: boolean;
  sale: string;
  price: string;
}

export interface FormState {
  card: FormProduct[];
}

export default class Forms extends Component<Props, FormState> {
  constructor(props: Props) {
    super(props);
    this.state = { card: [] };
  }

  updateCards = (card: FormProduct) => {
    this.setState({ card: [...this.state.card, card] });
  };

  render() {
    return (
      <div className="flex">
        <FormItem updateCards={this.updateCards} />
        <div className="cards">
          {this.state.card.length > 0 ? (
            <CardsItem card={this.state.card} />
          ) : (
            <p
              style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: '1.3rem',
                color: '#174F94',
              }}
            >
              NO CARDS
            </p>
          )}
        </div>
      </div>
    );
  }
}
