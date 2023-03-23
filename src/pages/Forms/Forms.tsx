import React, { Component } from 'react';
import './Forms.css';
import CardsItem from './Cards-item/CardsItem';
import FormItem from './Form-item/FormItem';

export default class Forms extends Component {
  render() {
    return (
      <div className="flex">
        <FormItem />
        <div className="cards">
          <CardsItem />
        </div>
      </div>
    );
  }
}
