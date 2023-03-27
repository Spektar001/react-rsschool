import React, { Component } from 'react';
import './Forms.css';
import { FormItems } from './Form-item/FormItems';
import FormItem from './Form-item/FormItem';
import { Props } from 'components/Types/types';
import { SubmitModal } from './SubmitModal/SubmitModal';

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
  modalOpen: boolean;
}

export default class Forms extends Component<Props, FormState> {
  constructor(props: Props) {
    super(props);
    this.state = { card: [], modalOpen: false };
  }

  updateCards = (card: FormProduct) => {
    this.setState({ card: [...this.state.card, card], modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="flex">
        <FormItem updateCards={this.updateCards} />
        <SubmitModal isOpen={this.state.modalOpen} close={this.closeModal} />
        {this.state.card.length > 0 ? (
          <FormItems cards={this.state.card} />
        ) : (
          <p
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: '4rem',
              color: 'rgb(193 45 45)',
            }}
          >
            NO CARDS
          </p>
        )}
      </div>
    );
  }
}
